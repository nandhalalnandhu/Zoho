import React, { useContext } from "react";
import "./DownloadData.css";
import { Mycont } from "../Context";
import uploadIcon from "../assets/file-img.png";

const DownloadData = () => {
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
    <div ref={divRef} className="previ">
      <div className="PreviewDataA">
        <div className="DataAA">
          <div className="DataAAA">
            <img
              src={invoice.yourlogo || uploadIcon}
              alt=""
              width={65}
              height={50}
            />
          </div>
          <div className="DataABB">
            <span className="DSpan-AA">{invoice.InvoiceName}</span>
            <span className="DSpan-BB">{invoice.InvoiceID}</span>
          </div>
        </div>

        <div className="DataBB">
          <div className="dataBAA">
            <span className="BA-spanN">{invoice.yourCompany}</span>
            <span className="BB-spanN">{invoice.yourName}</span>
            <span className="BB-spanN">{invoice.CompanysGSTIN}</span>
            <span className="BB-spanN">{invoice.CompanysAddress}</span>
            <span className="BB-spanN">{invoice.City}</span>
            <span className="BB-spanN">{invoice.State}</span>
            <span className="BB-spanN">{invoice.Country}</span>
          </div>
        </div>

        <div className="DataCC">

          <div className="dataBAA">
            <span className="BA-spanN">Bill To:{invoice.BillTo}</span>
            <span className="BB-spanN">{invoice.YourClientsCompany}</span>
            <span className="BB-spanN">{invoice.ClientGSTIN}</span>
            <span className="BB-spanN">{invoice.ClientAddress}</span>
            <span className="BB-spanN">{invoice.City1}</span>
            <span className="BB-spanN">{invoice.State2}</span>
            <span className="BB-spanN">{invoice.District}</span>
            <span className="BB-spanN">
              Place of supply :{invoice.PlaceofSupply}
            </span>
          </div>
          <div className="dataBBB">

            <span className="BA-spanN">
              Inv Date : {invoice.InvoiceDate}
            </span>
            <span className="BA-spanN">Due Date :   {invoice.DueDate}</span>

          </div>

        </div>

        {/* <div className="DataD"> */}
        <table className="DataDD">
          <thead>
            <tr className="DataDAE">
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
              <tr key={index} className="DataDBB">
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

        <div className="DataEE">
          <div className="DataEAA">
            <span className="BB-spanN">
              Sub Totel :{calculateSubtotal().toFixed()}
            </span>
            <span className="BB-spanN">
              SGST (1%) :{calculateTax("SGST").toFixed()}
            </span>
            <span className="BB-spanN">
              CGST (5%) :{calculateTax("CGST").toFixed()}
            </span>
            <span className="BB-spanN">
              Cess (3%) :{calculateTax("Cess").toFixed()}
            </span>
            <span className="BC-spanNN">
              TOTAL : {calculateTotal().toFixed(2)}
            </span>
          </div>
        </div>

        <div className="DataFF">
          <div className="DataFAA">
            <span className="FA-spanN">{invoice.Note}</span>
            <span className="FB-spanN">{invoice.NoteText}</span>
            <br />
            <span className="FA-spanN">{invoice.TermsandConditions}</span>
            <span className="FB-spanN">{invoice.TcText}</span>
          </div>
        </div>

        <div className="DataG"></div>
      </div>{" "}
    </div>
  );
};

export default DownloadData;
