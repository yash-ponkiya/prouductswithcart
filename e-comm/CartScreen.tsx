import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

import styles from "../src/component/styles";
import { useCart } from "./CartContext";

type Props = {
  goBack: () => void;
};

const CartScreen: React.FC<Props> = ({ goBack }) => {
  const { cart, increaseQty, decreaseQty, clearCart } = useCart();

  const total = cart.reduce((sum, item) => {
    const price = item.discountPrice ?? item.price;
    return sum + price * item.qty;
  }, 0);

  return (
    <SafeAreaView style={styles.cartSafeGray}>
      {/* HEADER */}
      <View style={styles.cartHeader}>
        <TouchableOpacity onPress={goBack}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.shippingTitle}>Shipping List</Text>
      </View>

      {/* EMPTY CART */}
      {cart.length === 0 ? (
        <View style={styles.cartEmptyBox}>
          <Text style={styles.cartEmptyText}>Your cart is empty 🛒</Text>
        </View>
      ) : (
        <>
          {/* CART LIST */}
          <FlatList
            data={cart}
            keyExtractor={(item, i) => `${item.id}-${item.size}-${i}`}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.cartListPadding}
            renderItem={({ item }) => {
              const price = item.discountPrice ?? item.price;

              return (
                <View style={styles.cartItemCard}>
                  <Image
                    source={{ uri: item.image }}
                    style={styles.cartItemImage}
                  />

                  <View style={styles.cartItemInfo}>
                    <Text style={styles.cartItemTitle}>{item.title}</Text>

                    <Text style={styles.cartItemSize}>
                      Size: {item.size}
                    </Text>

                    <Text style={{ fontSize: 12, color: "#888" }}>
                      Stock: {item.stock}
                    </Text>

                    <View style={styles.qtyRow}>
                      <TouchableOpacity
                        onPress={() => decreaseQty(item.id, item.size)}
                        style={styles.qtyBtnSmall}
                      >
                        <Text style={styles.qtyBtnTextSmall}>−</Text>
                      </TouchableOpacity>

                      <Text style={styles.qtyValueSmall}>{item.qty}</Text>

                      <TouchableOpacity
                        onPress={() => increaseQty(item.id, item.size)}
                        style={styles.qtyBtnSmall}
                      >
                        <Text style={styles.qtyBtnTextSmall}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <Text style={styles.cartItemPrice}>
                    ₹{price * item.qty}
                  </Text>
                </View>
              );
            }}
          />

          {/* BOTTOM BAR */}
          <View style={styles.cartBottomBar}>
            <Text style={styles.cartTotalText}>Total: ₹{total}</Text>

            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  "Confirm Order",
                  `Total Amount: ₹${total}`,
                  [
                    { text: "Cancel", style: "cancel" },
                    {
                      text: "Confirm",
                      onPress: () => {
                        clearCart();
                        Toast.show({
                          type: "success",
                          text1: "Order Placed 🛒",
                          text2: `Your total amount is ₹${total}`,
                        });
                      },
                    },
                  ]
                )
              }
              style={styles.buyNowBtn}
            >
              <Text style={styles.buyNowText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default CartScreen;
