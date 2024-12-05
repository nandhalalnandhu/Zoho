import React, { useContext } from "react";
import "./PreviewData.css";
import { Mycont } from "../Context";
import uploadIcon from "../assets/file-img.png";

const PreviewData = () => {
  const { invoice, divRef } = useContext(Mycont);

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

  return (
    <div className="PreviewData">
      <div className="DataA">
        <div className="DataAA">
          <img
            src={invoice.yourlogo || uploadIcon}
            alt=""
            width={65}
            height={50}
          />
        </div>
        <div className="DataAB">
          <span className="DSpan-A">{invoice.InvoiceName}</span>
          <span className="DSpan-B">{invoice.InvoiceID}</span>
        </div>
      </div>

      <div className="DataB">
        <div className="dataBA">
          <span className="BA-span">{invoice.yourCompany}</span>
          <span className="BB-span">{invoice.yourName}</span>
          <span className="BB-span">{invoice.CompanysGSTIN}</span>
          <span className="BB-span">{invoice.CompanysAddress}</span>
          <span className="BB-span">{invoice.City}</span>
          <span className="BB-span">{invoice.State}</span>
          <span className="BB-span">{invoice.Country}</span>
        </div>
      </div>

      <div className="DataC">
        <div className="dataBA">
          <span className="BA-span">Bill To:{invoice.BillTo}</span>
          <span className="BB-span">{invoice.YourClientsCompany}</span>
          <span className="BB-span">{invoice.ClientGSTIN}</span>
          <span className="BB-span">{invoice.ClientAddress}</span>
          <span className="BB-span">{invoice.City1}</span>
          <span className="BB-span">{invoice.State2}</span>
          <span className="BB-span">{invoice.District}</span>
          <span className="BB-span">
            Place of supply :{invoice.PlaceofSupply}
          </span>
        </div>
        <div className="dataBB">
          <span className="BA-span">Invoice Date : {invoice.InvoiceDate}</span>
          <span className="BA-span">Due Date : {invoice.DueDate}</span>
        </div>
      </div>

      {/* <div className="DataD"> */}
      <table className="DataD">
        <thead>
          <tr className="DataDA">
            <th>No</th>
            <th>Items </th>
            <th>Qty</th>
            <th>Rate</th>
            <th>SGST</th>
            <th>CGST</th>
            <th>Cess</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((item, index) => (
            <tr key={index} className="DataDB">
              <td>{index + 1}</td>
              <td>{item.Desc}</td>
              <td>{item.Qty}</td>
              <td>{item.Rate}</td>
              <td>{item.SGST}</td>
              <td>{item.CGST}</td>
              <td>{item.Cess}</td>
              <td>{(item.Qty * item.Rate).toFixed()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* </div> */}

      <div className="DataE">
        <div className="DataEA">
          <span className="BB-span">
            Sub Totel:{calculateSubtotal().toFixed()}
          </span>
          <span className="BB-span">
            SGST (1%) :{calculateTax("SGST").toFixed(2)}
          </span>
          <span className="BB-span">
            CGST (5%) :{calculateTax("CGST").toFixed(2)}
          </span>
          <span className="BB-span">
            Cess (3%) :{calculateTax("Cess").toFixed(2)}
          </span>
          <span className="BC-span">TOTAL : {calculateTotal().toFixed(2)}</span>
        </div>
      </div>

      <div className="DataF">
        <div className="DataFA">
          <span className="FA-span">{invoice.Note}</span>
          <span className="FB-span">{invoice.NoteText}</span>
          <br />
          <span className="FA-span">{invoice.TermsandConditions}</span>
          <span className="FB-span">{invoice.TcText}</span>
        </div>
      </div>

      <div className="DataG"></div>
    </div>
  );
};

export default PreviewData;
