import { useState, useCallback, useMemo } from "react";
import { productList } from "../utils/constantData";

export const useCreateAccount = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const [sizeOpen, setSizeOpen] = useState(false);
  const [sizeValue, setSizeValue] = useState<string | null>(null);
  const [sizeItems, setSizeItems] = useState<
    { label: string; value: string }[]
  >([]);

  const openModal = useCallback((item: any) => {
    setSelectedItem(item);

    if (Array.isArray(item?.sizes)) {
      const options = item.sizes.map((s: string) => ({
        label: s,
        value: s,
      }));
      setSizeItems(options);
      setSizeValue(options[0]?.value ?? null);
    }

    setSizeOpen(false);
    setModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalVisible(false);
    setSizeOpen(false);
  }, []);

  const selectedSizeStock = useMemo(() => {
    if (!selectedItem || !sizeValue) return null;
    return selectedItem.stock?.[sizeValue] ?? null;
  }, [selectedItem, sizeValue]);

  return {
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
  };
};
