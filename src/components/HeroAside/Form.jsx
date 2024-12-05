import React, { useContext } from "react";
import "./Form.css";
import last from "../assets/lasttitle.png";
import uplod from "../assets/upload-img.png";
import uploadIcon from "../assets/file-img.png";
import { CgAdd } from "react-icons/cg";
import { MdDeleteForever } from "react-icons/md";
import { Mycont } from "../Context";


const Form = () => {
  const {
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
    printRef
    
    
  } = useContext(Mycont);

  return (
    <div ref={printRef}  className="formout">
      <div  className="formz">
        <div className="form-innerA">
          <div className="inner-1">
            <div className="file">
              <input
                id="fileInput"
                className="file-inn"
                type="file"
                accept="image/*"
                onChange={handleImg}
                style={{ display: "none" }}
              />
              <img
                src={invoice.yourlogo || uploadIcon}
                alt="Your Logo"
                className="upload-preview"
                onClick={openFilePicker} // Open file input when image is clicked
                style={{}}
              />
            </div>

            <img className="upload-inst" src={uplod} alt="" />
          </div>

          <div className="inner-2">
            <input
              className="tax"
              type="text"
              name="InvoiceName"
              // defaultValue="TAX INVOICE"
              placeholder="TAX INVOICE"
              value={invoice.InvoiceName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-innerB">
          <input
            className="innerB-1"
            type="text"
            name="yourCompany"
            placeholder="Your Company"
            value={invoice.yourCompany}
            onChange={handleChange}
          />
          <input
            className="innerB-1"
            type="text"
            name="yourName"
            placeholder="Your Name"
            value={invoice.yourName}
            onChange={handleChange}
          />

          <input
            className="innerB-1"
            type="text"
            name="CompanysGSTIN"
            placeholder="Companys GSTIN"
            value={invoice.CompanysGSTIN}
            onChange={handleChange}
          />
          <input
            className="innerB-1"
            type="text"
            name="ComapnysAddress"
            placeholder="Companys Address"
            value={invoice.ComapnysAddress}
            onChange={handleChange}
          />
          <input
            className="innerB-1"
            type="text"
            placeholder="City"
            name="City"
            value={invoice.City}
            onChange={handleChange}
          />
          <input
            className="innerB-1"
            type="text"
            placeholder="State"
            name="State"
            value={invoice.State}
            onChange={handleChange}
          />

          <select
            className="innerB-11"
            name="Country"
            value={invoice.Country}
            onChange={handleChange}
          >
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
          </select>
        </div>

        <div className="form-innerC">
          <div className="innerC-1">
            <input
              className="innerBB-1"
              type="text"
              name="BillTo"
              placeholder="Bill To :"
              value={invoice.BillTo}
              onChange={handleChange}
            />

            <input
              className="innerB-1"
              type="text"
              name="YourClientsCompany"
              placeholder="Your Client Company"
              value={invoice.YourClientsCompany}
              onChange={handleChange}
            />

            <input
              className="innerB-1"
              type="text"
              name="ClientsGSTIN"
              placeholder="Clients GSTIN"
              value={invoice.ClientsGSTIN}
              onChange={handleChange}
            />

            <input
              className="innerB-1"
              type="text"
              name="ClientAddress"
              placeholder="Client Address"
              value={invoice.ClientAddress}
              onChange={handleChange}
            />

            <input
              className="innerB-1"
              type="text"
              name="City1"
              placeholder="City"
              value={invoice.City1}
              onChange={handleChange}
            />

            <input
              className="innerB-1"
              type="text"
              name="State2"
              placeholder="State"
              value={invoice.State2}
              onChange={handleChange}
            />

            <select
              className="innerB-1"
              name="District"
              value={invoice.District}
              onChange={handleChange}
            >
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
            </select>
          </div>

          <div className="innerC-2">
            <div className="innerC-1Aa">
              <input type="text" placeholder="Invoice#" />
              <input
                type="text"
                placeholder="INV-12"
                name="InvoiceID"
                value={invoice.InvoiceID}
                onChange={handleChange}
              />
            </div>
            <div className="innerC-1A">
              <input
                type="text"
                className="dateinput-head"
                placeholder="Invoice Date"
              />
              <input
                className="dateinput"
                type="date"
                name="InvoiceDate"
                value={invoice.InvoiceDate}
                onChange={handleChange}
              />
            </div>
            <div className="innerC-1A">
              <input
                className="dateinput-head"
                type="text"
                placeholder="Due Date"
              />
              <input
                className="dateinput"
                type="date"
                name="DueDate"
                value={invoice.DueDate}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="form-innerD">
          <div className="innerCr">
            <span>Place of Supply:</span>
            <select
              className="innerD"
              name="PlaceofSupply"
              value={invoice.PlaceofSupply}
              onChange={handleChange}
            >
              <option value="India">State</option>
              <option value="United States">Kerala</option>
              <option value="United Kingdom">Tamil nadu</option>
              <option value="Australia">Karnataka</option>
              <option value="Canada">J&k</option>
            </select>
          </div>
        </div>

        <div className="form-innerE">
          <div className="Form-inner-inside">
            <div className="inside-aa">
              <input
                className="aa"
                type="text"
                defaultValue="Item description"
              />
              <input className="a" type="text" defaultValue="Qty" />
              <input className="a" type="text" defaultValue="Rate" />
              <input className="a" type="text" defaultValue="SGST" />
              <input className="a" type="text" defaultValue="CGST" />
              <input className="a" type="text" defaultValue="Cess" />
              <input className="a" type="text" defaultValue="Amount" />
            </div>
            {invoice.items.map((item, index) => (
              <div key={index} className="inside-a">
                <textarea
                  className="bb"
                  type="text"
                  placeholder="Brochure Design"
                  name="Desc"
                  value={item.Desc}
                  onChange={(e) => handleItemChange(index, e)}
                />
                <input
                  className="b"
                  type="number"
                  placeholder="2"
                  name="Qty"
                  value={item.Qty}
                  onChange={(e) => handleItemChange(index, e)}
                />
                <input
                  className="b"
                  type="number"
                  name="Rate"
                  placeholder="100.00"
                  value={item.Rate}
                  onChange={(e) => handleItemChange(index, e)}
                />
                <input
                  className="b"
                  type="number"
                  placeholder="7"
                  name="SGST"
                  value={item.SGST}
                  onChange={(e) => handleItemChange(index, e)}
                />
                <input
                  className="b"
                  type="number"
                  placeholder="5"
                  name="CGST"
                  value={item.CGST}
                  onChange={(e) => handleItemChange(index, e)}
                />
                <input
                  className="b"
                  type="number"
                  placeholder="0"
                  name="Cess"
                  value={item.Cess}
                  onChange={(e) => handleItemChange(index, e)}
                />

                <div className="b">
                  <span>{item.Qty * item.Rate}</span>
                </div>

                <button className="remove" onClick={() => removeItem(index)}>
                  <MdDeleteForever />
                </button>
              
              </div>
              
            ))}

          
            <div className="inside-c">
              <button className="add" onClick={addItem}>
                <CgAdd />
                Add Line Item{" "}
              </button>
            </div>
           
          </div>
        </div>

        <div className="form-innerF">
          <div className="inner-f">
            <div className="inner-f-a">
              <span>Sub Total</span>{" "}
              <span>{calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="inner-f-a">
              <span>SGST(6%)</span>{" "}
              <span>{calculateTax("SGST").toFixed(2)}</span>
            </div>
            <div className="inner-f-a">
              <span>CGST(6%)</span>{" "}
              <span>{calculateTax("CGST").toFixed(2)}</span>
            </div>
            <div className="inner-f-a">
              <span>Cess(6%)</span>{" "}
              <span>{calculateTax("Cess").toFixed(2)}</span>
            </div>
            <div className="inner-f-aa">
              <span> TOTAL</span> <span>₹ {calculateTotal().toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div className="form-innerG">
          <input
            type="text"
            defaultValue="Notes"
            placeholder="Notes"
            name="Note"
            value={invoice.Note}
            onChange={handleChange}
          />
          <textarea
            type="text"
            defaultValue="It was great doing business with you."
            placeholder="It was great doing business with you."
            name="NoteText"
            value={invoice.NoteText}
            onChange={handleChange}
          />
        </div>
        <div className="form-innerG">
          <input
            type="text"
            defaultValue="Terms & Conditions"
            placeholder="Terms & Conditions"
            name="TermsandConditions"
            value={invoice.TermsandConditions}
            onChange={handleChange}
          />
          <textarea
            type="text"
            defaultValue="Please make the payment by the due date."
            placeholder="Please make the payment by the due date"
            name="TcText"
            value={invoice.TcText}
            onChange={handleChange}
          />
        </div>

        <div className="form-innerH">
          <img src={last} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Form;
