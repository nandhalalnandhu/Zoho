import React, { useContext, useState } from "react";
import "./DownloadSide.css";
import themeimg from "../assets/theme-img.png";
import pdfformat from "../assets/pdf-format.png";
import appdownload from "../assets/appdownload.png";
import { Mycont } from "../Context";
import { AnimatePresence, motion } from "framer-motion";
import { FaRegEye } from "react-icons/fa";
import PreviewData from "../PreviewData/PreviewData";
import { IoPrint } from "react-icons/io5";

export const DownloadSide = () => {
  const {
    fileName,
    setFileName,
    handleDownload,
    isModalOpen,
    openModal,
    closeModal,
    handlePrint,
  } = useContext(Mycont);

  const [preview, setPreview] = useState(false);

  const openPreview = () => {
    setPreview(!preview);
  };

  return (
    <>
      <div className="Preview">
        <div className="pA">
          <span>Download Invoice</span>
        </div>
        <div className="pB">
          <img src={themeimg} alt="" />
        </div>
        <div className="pC">
          <img src={pdfformat} alt="" />
        </div>

        <div className="pD">
          <button className="btA" onClick={openPreview}>
            {" "}
            <FaRegEye className="eye" />
          </button>

          <button className="printbtn" onClick={handlePrint}>
            <IoPrint className="printicon" />
          </button>

          <button onClick={openModal} className="btB">
            Download
          </button>
        </div>
        <div className="pDD">
          <button className="btA" onClick={openPreview}>
            {" "}
            <FaRegEye className="eye" />
          </button>

          {/* <button className="printbtn" onClick={handlePrint} ><IoPrint className="printicon" /></button> */}

          <button onClick={openModal} className="btB">
            Download
          </button>
        </div>

        <div className="pF">
          <img src={appdownload} alt="" />
        </div>
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal-overlay"
            // onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal"
              initial={{ scale: 0.8, rotate: "0deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0.8, rotate: "10deg" }}
              transition={{ type: "spring", stiffness: 600 }}
            >
              <h4>Enter PDF File Name</h4>
              <input
                type="text"
                value={fileName}
                onChange={(e) => setFileName(e.target.value)}
                placeholder="Enter file name"
              />
              <div className="modal-buttons">
                <button onClick={handleDownload}>Download</button>

                <button onClick={closeModal}>Cancel</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {preview && (
          <motion.div
            className="modal-overlay"
            onClick={openPreview}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modall"
              initial={{ scale: 0.8, rotate: "0deg" }}
              animate={{ scale: 1, rotate: "0deg" }}
              exit={{ scale: 0.8, rotate: "0deg" }}
              transition={{ type: "spring", stiffness: 600 }}
            >
              <PreviewData />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
