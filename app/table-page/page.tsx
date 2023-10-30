"use client"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface Product {
    code: string;
    name: string;
    category: string;
    quantity: number;
}


const TablePage = () => {

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
            <div className="card">
                <DataTable value={products} tableStyle={{ minWidth: '50rem' }} >
                    <Column field="code" header="Code" sortable style={{ width: '25%' }}></Column>
                    <Column field="name" header="Name" sortable style={{ width: '25%' }}></Column>
                    <Column field="category" header="Category" sortable style={{ width: '25%' }}></Column>
                    <Column field="quantity" header="Quantity" sortable style={{ width: '25%' }}></Column>
                </DataTable>
            </div>
        </div>
    )
};

export default TablePage;