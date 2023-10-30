"use client"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Row } from 'primereact/row';
interface Product {
  code: string;
  name: string;
  category: string;
  quantity: number;
}
const Home = () => {

  const products: Array<Product> = [
    {
      "code": "asdf",
      "name": "test1",
      "category": "Movie",
      "quantity": 54
    },
    {
      "code": "asdf2",
      "name": "test1",
      "category": "Movie",
      "quantity": 14
    },
    {
      "code": "asdf3",
      "name": "test1",
      "category": "Movie",
      "quantity": 34
    },
    {
      "code": "asdf4",
      "name": "test1",
      "category": "Movie",
      "quantity": 16
    }
  ]

  return (
    <div className='content'>
      <div style={{ minWidth: "90%", display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
        <div className="grid" style={{ width: "100%" }}>
          <div className="card col" style={{ margin: "3px", display: 'flex', height: "18vh", justifyContent: "center", alignItems: "center", background: "blue", color: "wheat" }}>Total Job Count</div>
          <div className="card col" style={{ margin: "3px", display: 'flex', height: "18vh", justifyContent: "center", alignItems: "center", background: "green", color: "wheat" }}>Running Job Count</div>
          <div className="card col" style={{ margin: "3px", display: 'flex', height: "18vh", justifyContent: "center", alignItems: "center", background: "orange", color: "black" }}>Paused Job Count</div>
          <div className="card col" style={{ margin: "3px", display: 'flex', height: "18vh", justifyContent: "center", alignItems: "center", background: "red", color: "wheat" }}>Number of jobs with errors</div>
        </div>
      </div>

      <h3 style={{ fontSize: "25px", fontWeight: "700" }}>Latest Job History</h3>
      <DataTable value={products} tableStyle={{ minWidth: '50rem' }} >
        <Column field="code" header="Code" sortable style={{ width: '25%' }}></Column>
        <Column field="name" header="Name" sortable style={{ width: '25%' }}></Column>
        <Column field="category" header="Category" sortable style={{ width: '25%' }}></Column>
        <Column field="quantity" header="Quantity" sortable style={{ width: '25%' }}></Column>
      </DataTable>
    </div>
  )
};

export default Home;