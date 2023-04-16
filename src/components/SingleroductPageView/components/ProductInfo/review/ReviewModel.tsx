import NiceModal, { useModal } from "@ebay/nice-modal-react";
import ReactModal from "react-modal";
import AddReviewForm from "./AddReviewForm";
import useDeviceProperties from "../../../../../Hooks/UseMediaQueries";

const ReviewModel = NiceModal.create<any>(() => {
  const { isDesktopOrLaptop, isTabletOrMobile } = useDeviceProperties();

  const modal = useModal();
  return (
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
          // top: "100px",
          width: isDesktopOrLaptop ? "50%" : "85%",
          height: isDesktopOrLaptop ? "80%" : "70%",
          margin: " 0 auto",
          overflow: "hidden",
          border: "none",
          borderRadius: "10px",
          padding: "0px",
          //   overflowY: "scroll",
        },
      }}
      // ariaHideApp = { false: bool },
      //@ts-ignore  //@ts-ignore
      appElement={document.getElementById("app")}
    >
      <div className="container flex flex-col justify-center h-full my-10">
        {" "}
        <AddReviewForm />
      </div>
    </ReactModal>
  );
});
export default ReviewModel;
