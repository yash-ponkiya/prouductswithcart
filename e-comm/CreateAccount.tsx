import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DropDownPicker from "react-native-dropdown-picker";
import Toast from "react-native-toast-message";

import styles, { H_GAP } from "../src/component/styles";
import { useCreateAccount } from "../src/component/useCreateAccount";
import { useCart } from "./CartContext";

type Props = {
  goToCart: () => void;
};

const Rating = ({ value = 0 }: { value?: number }) => {
  const full = Math.floor(value);
  const empty = 5 - full;

  return (
    <View style={styles.ratingContainer}>
      {Array(full)
        .fill(0)
        .map((_, i) => (
          <Text key={`f-${i}`} style={styles.star}>★</Text>
        ))}
      {Array(empty)
        .fill(0)
        .map((_, i) => (
          <Text key={`e-${i}`} style={styles.emptyStar}>★</Text>
        ))}
      <Text style={styles.ratingValue}>{value.toFixed(1)}</Text>
    </View>
  );
};

const ProductCard = ({ item, onPress }: any) => (
  <TouchableOpacity style={styles.card} onPress={() => onPress(item)}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={styles.info}>
      <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
      <Rating value={item.rating ?? 0} />
      <View style={styles.priceRow}>
        {item.discountPrice ? (
          <>
            <Text style={styles.mainPrice}>₹{item.discountPrice}</Text>
            <Text style={styles.cutPrice}>₹{item.price}</Text>
          </>
        ) : (
          <Text style={styles.mainPrice}>₹{item.price}</Text>
        )}
      </View>
    </View>
  </TouchableOpacity>
);

const CreateAccount: React.FC<Props> = ({ goToCart }) => {
  const {
    productList,
    modalVisible,
    openModal,
    closeModal,
    selectedItem,
    sizeOpen,
    setSizeOpen,
    sizeValue,
    setSizeValue,
    sizeItems,
    setSizeItems,
    selectedSizeStock,
  } = useCreateAccount();

  const { cart, addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const increaseQty = () => {
    if (!sizeValue) {
      Toast.show({ type: "error", text1: "Select size first" });
      return;
    }
    if (qty >= selectedSizeStock) {
      Toast.show({
        type: "error",
        text1: "Stock limit reached",
        text2: `Only ${selectedSizeStock} available`,
      });
      return;
    }
    setQty(q => q + 1);
  };

  const handleAddToCart = () => {
    if (!sizeValue) {
      Toast.show({ type: "error", text1: "Please select size" });
      return;
    }
    if (selectedSizeStock <= 0) {
      Toast.show({ type: "error", text1: "Out of stock" });
      return;
    }

    addToCart({
      id: selectedItem.id,
      title: selectedItem.title,
      image: selectedItem.image,
      price: selectedItem.price,
      discountPrice: selectedItem.discountPrice,
      size: sizeValue,
      qty,
      stock: selectedSizeStock,
    });

    Toast.show({ type: "success", text1: "Added to cart" });
    setQty(1);
    closeModal();
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* HEADER */}
      <View style={styles.headerRow}>
        <Text style={styles.head}>Products</Text>
        <TouchableOpacity style={styles.cartBtn} onPress={goToCart}>
          <Text style={styles.cartText}>🛒 {cart.length}</Text>
        </TouchableOpacity>
      </View>

      {/* PRODUCT GRID */}
      <FlatList
        data={productList}
        numColumns={2}
        keyExtractor={item => String(item.id)}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: index % 2 === 0 ? H_GAP : 0 }}>
            <ProductCard
              item={item}
              onPress={(i: any) => {
                setQty(1);
                openModal(i);
              }}
            />
          </View>
        )}
      />

      <Modal visible={modalVisible} transparent animationType="fade">
        <Pressable style={styles.modalOverlay} onPress={closeModal}>
          <Pressable style={styles.modalBox}>

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.modalContent}
            >
              {selectedItem && (
                <>
                  <Image source={{ uri: selectedItem.image }} style={styles.modalImage} />

                  <Text style={styles.modalTitle}>{selectedItem.title}</Text>

                  <View style={styles.row}>
                    <Text style={styles.label}>Rating:</Text>
                    <Rating value={selectedItem.rating ?? 0} />
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.label}>Price:</Text>
                    {selectedItem.discountPrice ? (
                      <>
                        <Text style={styles.modalMainPrice}>₹{selectedItem.discountPrice}</Text>
                        <Text style={styles.modalOldPrice}>₹{selectedItem.price}</Text>
                      </>
                    ) : (
                      <Text style={styles.modalMainPrice}>₹{selectedItem.price}</Text>
                    )}
                  </View>

                  <View style={[styles.row, { zIndex: 5000 }]}>
                    <Text style={styles.label}>Size:</Text>
                    <View style={styles.sizeDropdownContainer}>
                      <DropDownPicker
                        open={sizeOpen}
                        value={sizeValue}
                        items={sizeItems}
                        setOpen={setSizeOpen}
                        setValue={setSizeValue}
                        setItems={setSizeItems}
                        listMode="SCROLLVIEW"
                        zIndex={5000}
                        zIndexInverse={1000}
                      />
                    </View>
                  </View>

                  <View style={styles.row}>
                    <Text style={styles.label}>Stock:</Text>
                    <Text style={styles.value}>
                      {sizeValue ? selectedSizeStock : "Select size"}
                    </Text>
                  </View>

                  {/* QUANTITY */}
                  <View style={styles.row}>
                    <Text style={styles.label}>Quantity:</Text>
                    <View style={styles.qtyContainer}>
                      <TouchableOpacity
                        style={styles.qtyBtnm}
                        onPress={() => setQty(q => Math.max(1, q - 1))}
                      >
                        <Text style={styles.qtyBtnTextm}>−</Text>
                      </TouchableOpacity>

                      <Text style={styles.qtyValue}>{qty}</Text>

                      <TouchableOpacity
                        style={styles.qtyBtnm}
                        onPress={increaseQty}
                      >
                        <Text style={styles.qtyBtnTextm}>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <TouchableOpacity style={styles.addCartBtn} onPress={handleAddToCart}>
                    <Text style={styles.addCartText}>Add to Cart</Text>
                  </TouchableOpacity>
                </>
              )}
            </ScrollView>

            <TouchableOpacity onPress={closeModal} style={styles.modalCloseButton}>
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>

          </Pressable>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

export default CreateAccount;
