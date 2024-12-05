import React, { createContext, useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const Mycont = createContext();

const Context = ({ children }) => {
  // input===============================INPUTPASS=================================/

  const [invoice, setInvoice] = useState({
    yourlogo: "",
    InvoiceName: "",

    yourCompany: "",
    yourName: "",
    CompanysGSTIN: "",
    ComapnysAddress: "",
    City: "",
    State: "",
    Country: "",

    BillTo: "",
    YourClientsCompany: "",
    ClientsGSTIN: "",
    ClientAddress: "",
    City1: "",
    State2: "",
    District: "",
    PlaceofSupply: "",

    InvoiceID: "",
    InvoiceDate: "",
    DueDate: "",

    items: [
      { Desc: "", Qty: 1, Rate: 0, SGST: 0, CGST: 0, Cess: 0, Amount: 0 },
    ],

    Note: "",
    NoteText: "",

    TermsandConditions: "",
    TcText: "",
  });

  const handleImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setInvoice((prevInvoice) => ({
          ...prevInvoice,
          yourlogo: reader.result, // Set the base64 image
        }));
      };
      reader.readAsDataURL(file); // Read file as a Data URL
    }
  };

  const openFilePicker = () => {
    document.getElementById("fileInput").click(); // Programmatically click the file input
  };

  const handleChange = (e) => {
    setInvoice({
      ...invoice,
      [e.target.name]: e.target.value,
    });
  };

  const handleItemChange = (index, e) => {
    const newItems = [...invoice.items];
    newItems[index][e.target.name] = e.target.value;
    setInvoice({ ...invoice, items: newItems });
  };

  const addItem = () => {
    setInvoice({
      ...invoice,
      items: [
        ...invoice.items,
        { Desc: "", Qty: 1, Rate: 0, SGST: 0, CGST: 0, Cess: 0, Amount: 0 },
      ],
    });
  };

  const removeItem = (index) => {
    const newItems = invoice.items.filter((_, i) => i !== index);
    setInvoice({
      ...invoice,
      items: newItems,
    });
  };

  // const qtyRate = (acc, item) => {
  //   return (Qty * Rate).toFixed(2); // Round to 2 decimal places
  // };

  // Calculate totals dynamically

  const calculateSubtotal = () =>
    invoice.items.reduce((acc, item) => acc + item.Qty * item.Rate, 0);

  const calculateTax = (type) =>
    invoice.items.reduce(
      (acc, item) => acc + (item.Qty * item.Rate * item[type]) / 100,
      0
    );

  const calculateTotal = () =>
    calculateSubtotal() +
    calculateTax("SGST") +
    calculateTax("CGST") +
    calculateTax("Cess");

  // ++++++++++++++++++++++++++++PREVIEWDATAPASSSTART++++++++++++++++++++++++++++++++++++++//

  const [fileName, setFileName] = useState("invoice.pdf");
  const divRef = useRef(null);

  const handleDownload = async () => {
    if (divRef.current) {
      const canvas = await html2canvas(divRef.current, {
        scale: 2, // Increase scale for better quality
        useCORS: true, // Handle cross-origin images if needed
      });

      const imgData = canvas.toDataURL("image/png");

      // PDF dimensions for A4 size
      const pdfWidth = 210; // A4 width in mm
      const pdfHeight = 297; // A4 height in mm

      // Image dimensions
      const imgWidth = pdfWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

      const pdf = new jsPDF("p", "mm", "a4");

      let position = 0;

      // Add image to PDF, splitting across pages if necessary
      while (position < imgHeight) {
        pdf.addImage(
          imgData,
          "PNG",
          0,
          position ? -position : 0,
          imgWidth,
          imgHeight
        );
        position += pdfHeight;

        if (position < imgHeight) {
          pdf.addPage(); // Add a new page if there is more content
        }
      }

      pdf.save(`${fileName}`);
      closeModal(); // Close modal after saving PDF
    } else {
      console.error("Invoice container not found!");
    }
  };
  // +++++++++++++++++++++++++++++PREVIEWDATAEND++++++++++++++++++++++++++++++++++++++//

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // ++++++++++++++++++++++++++ Window print ++++++++++++++++++++++++++++++++++++++++++++++

  const printRef = useRef();

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  const contextValue = {
    fileName,
    setFileName,
    handleDownload,
    invoice,
    handleImg,
    openFilePicker,
    handleChange,
    handleItemChange,
    addItem,
    removeItem,
    calculateSubtotal,
    calculateTax,
    calculateTotal,
    isModalOpen,
    openModal,
    closeModal,
    handlePrint,
    printRef,
    divRef,
  };

  return <Mycont.Provider value={contextValue}>{children}</Mycont.Provider>;
};

export default Context;
