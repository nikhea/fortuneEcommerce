import { FC, useState } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import ReactModal from "react-modal";
import ProductModal from "./productModal";
import { useSingleFetchProducts } from "../../Hooks/useProducts/useSingleFetchProducts";
import { useQuery } from "@tanstack/react-query";
import { fetchSingleProducts } from "../../services/shared/products";
import { queryKey } from "../../Hooks/queryKeys";
import PageLoading from "../UI/Loading/PageLoading";

interface modals {
  modalIsOpen?: any;
  setIsOpen?: any;
}

const ModalComponent: FC = NiceModal.create<any>(({ slug }) => {
  const { data: product, isLoading } = useQuery([queryKey.products, slug], () =>
    fetchSingleProducts(slug)
  );

  const modal = useModal();

  const [modalIsOpen, setIsOpen] = useState(true);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <ReactModal
        isOpen={modal.visible}
        onRequestClose={() => modal.remove()}
        shouldCloseOnOverlayClick={true}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 999999999999,
          },
          content: {
            top: "30px",
            width: "90%",
            height: "90%",
            margin: " 0 auto",
            overflow: "hidden",
            border: "none",
            borderRadius: "10px",
            padding: "0px",
            overflowY: "scroll",
          },
        }}
        // ariaHideApp = { false: bool },
        //@ts-ignore  //@ts-ignore
        appElement={document.getElementById("app")}
      >
        {/* {product && <ProductModal product={product && product.data} />} */}
        {product ? (
          <ProductModal product={product && product.data} />
        ) : (
          <PageLoading />
        )}
      </ReactModal>
    </div>
  );
});

export default ModalComponent;
// className="overflow-y-scroll scrollbar-thin scrollbar-thumb-pink-500 scrollbar-track-pink-300 scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
