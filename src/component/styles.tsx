import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const H_GAP = 12;
export const V_GAP = 12;
export const CARD_WIDTH = (width - H_GAP * 3) / 2;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },

  head: {
    textAlign: "center",
    fontWeight: "900",
    fontSize: 20,
    color: "red",
    marginVertical: 8,
  },

  list: {
    paddingHorizontal: H_GAP / 2,
    paddingTop: 12,
    paddingBottom: 24,
  },

  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: V_GAP,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    marginBottom: 8,
  },

  cartBtn: {
    backgroundColor: "#000",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },

  cartText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  card: {
  width: CARD_WIDTH,
  height: CARD_WIDTH + 120,
  backgroundColor: "#fff",
  borderRadius: 16,
  borderWidth: 1,
  borderColor: "#eee",
  overflow: "hidden",
  elevation: 2,
  shadowColor: "#000",
  shadowOpacity: 0.08,
  shadowRadius: 4,
  shadowOffset: { width: 0, height: 2 },

  marginHorizontal: H_GAP / 4,
  marginBottom: V_GAP,
},

  image: {
    width: "100%",
    height: CARD_WIDTH,
    backgroundColor: "#ddd",
  },

  info: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },

  title: {
    fontSize: 15,
    fontWeight: "800",
    color: "#111",
    marginBottom: 4,
  },

  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  star: {
    fontSize: 16,
    color: "#FFD700",
    marginRight: 2,
  },

  halfStar: {
    opacity: 0.5,
  },

  emptyStar: {
    fontSize: 16,
    color: "#ccc",
    marginRight: 2,
  },

  ratingValue: {
    fontSize: 13,
    fontWeight: "600",
    color: "#111",
    marginLeft: 4,
  },

  /* ================= PRICE ================= */
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },

  mainPrice: {
    fontSize: 18,
    fontWeight: "900",
    color: "#000",
  },

  cutPrice: {
    fontSize: 13,
    fontWeight: "700",
    color: "#777",
    textDecorationLine: "line-through",
    marginLeft: 8,
  },

  /* ================= MODAL ================= */
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },

  modalBox: {
    width: "95%",
    maxWidth: 720,
    height: "85%",
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 8,
  },

  modalBody: {
    flex: 1,
  },

  modalScroll: {
    flex: 1,
  },

  modalContent: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
  },

  modalImage: {
    width: "100%",
    height: 280,
    backgroundColor: "#ddd",
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 12,
    textAlign: "center",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  label: {
    fontWeight: "700",
    width: 110,
  },

  value: {
    flex: 1,
    fontWeight: "600",
  },

  modalMainPrice: {
    fontSize: 20,
    fontWeight: "900",
    color: "#000",
  },

  modalOldPrice: {
    fontSize: 15,
    fontWeight: "700",
    color: "#777",
    textDecorationLine: "line-through",
    marginLeft: 10,
  },

  /* ================= DROPDOWN ================= */
  sizeDropdownContainer: {
    flex: 1,
    zIndex: 5000,
    elevation: 5000,
  },

  sizeDropdownContainerOpen: {
    zIndex: 6000,
    elevation: 6000,
  },

  sizeDropdown: {
    borderColor: "#ccc",
    minHeight: 40,
  },

  sizeDropDownContainer: {
    borderColor: "#ccc",
    maxHeight: 140,
  },

  /* ================= ADD TO CART ================= */
  addCartBtn: {
    backgroundColor: "#000",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginHorizontal: 16,
  },

  addToCartText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },

  modalCloseButton: {
    alignSelf: "center",
    marginTop: 8,
    marginBottom: 12,
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#111",
    backgroundColor: "#fff",
  },

  modalCloseText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111",
  },

  cartsafe: {
    flex: 1,
    backgroundColor: "#fff",
  },

  carthead: {
    textAlign: "center",
    fontWeight: "900",
    fontSize: 20,
    marginVertical: 12,
  },

  emptyText: {
    textAlign: "center",
    marginTop: 60,
    fontSize: 16,
    color: "#666",
  },

  cartCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 12,
    marginBottom: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#eee",
    padding: 10,
    alignItems: "center",
  },

  cartImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: "#eee",
  },

  cartInfo: {
    flex: 1,
    marginLeft: 12,
  },

  cartTitle: {
    fontSize: 15,
    fontWeight: "800",
    marginBottom: 4,
  },

  cartSize: {
    fontSize: 13,
    color: "#555",
  },

  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  qtyBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },

  qtyBtnText: {
    fontSize: 18,
  },

  qtyText: {
    marginHorizontal: 12,
    fontWeight: "700",
    fontSize: 14,
  },

  priceDeleteBox: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 80,
  },

  itemPrice: {
    fontSize: 15,
    fontWeight: "900",
  },

  deleteBtn: {
    backgroundColor: "#ffe5e5",
    padding: 8,
    borderRadius: 10,
  },

  deleteIcon: {
    fontSize: 16,
    color: "red",
  },

  cartFooter: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
  },

  cartFooterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  totalText: {
    fontSize: 16,
    fontWeight: "700",
  },

  totalAmount: {
    fontSize: 18,
    fontWeight: "900",
  },

  btnbuy: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: 150,
    height: 36,
    alignSelf: "center",
    backgroundColor: "#000",
    marginTop: 10,
  },

  btnbuytxt: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 15,
  },

  addCartText: {
    fontWeight: "900",
    color: "#fff",
  },

  cartList: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 120,
  },

  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  qtyBtnm: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },

  qtyBtnTextm: {
    fontSize: 22,
    fontWeight: "700",
  },

  qtyValue: {
    fontSize: 18,
    fontWeight: "600",
    minWidth: 30,
    textAlign: "center",
  },

cartSafeGray: {
  flex: 1,
  backgroundColor: "#f7f7f7",
},

cartHeader: {
  flexDirection: "row",
  alignItems: "center",
  padding: 16,
},

backArrow: {
  fontSize: 35,
  fontWeight: "900",
},

shippingTitle: {
  flex: 1,
  textAlign: "center",
  fontSize: 18,
  fontWeight: "700",
  color: "red",
  marginLeft: -23,
},

cartEmptyBox: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
},

cartEmptyText: {
  fontSize: 18,
  color: "#777",
},

cartListPadding: {
  paddingHorizontal: 16,
  paddingBottom: 140,
},

cartItemCard: {
  flexDirection: "row",
  backgroundColor: "#fff",
  borderRadius: 18,
  padding: 12,
  marginBottom: 14,
  alignItems: "center",
  elevation: 3,
},

cartItemImage: {
  width: 60,
  height: 60,
  borderRadius: 12,
  backgroundColor: "#eee",
},

cartItemInfo: {
  flex: 1,
  marginLeft: 12,
},

cartItemTitle: {
  fontSize: 15,
  fontWeight: "700",
},

cartItemSize: {
  fontSize: 13,
  color: "#777",
  marginTop: 2,
},

qtyBtnSmall: {
  width: 28,
  height: 28,
  borderRadius: 14,
  borderWidth: 1,
  borderColor: "#ccc",
  alignItems: "center",
  justifyContent: "center",
},

qtyBtnTextSmall: {
  fontSize: 16,
},

qtyValueSmall: {
  marginHorizontal: 12,
  fontSize: 15,
},

cartItemPrice: {
  fontSize: 15,
  fontWeight: "700",
},

cartBottomBar: {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "#fff",
  padding: 16,
  borderTopWidth: 1,
  borderColor: "#eee",
},

cartTotalText: {
  fontSize: 18,
  fontWeight: "800",
  textAlign: "center",
  marginBottom: 10,
},

buyNowBtn: {
  backgroundColor: "#000",
  paddingVertical: 14,
  borderRadius: 30,
  alignItems: "center",
},

buyNowText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "700",
},

});

export default styles;
