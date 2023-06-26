import PageHeader from "../components/ProductsPage/PageHeader";
import { useEffect, useState } from "react";
import { get, post } from "../utils/api";
import PaginatedTable from "../components/PaginatedTable";
import Summary from "../components/ProductsPage/Summary";
import Pagination from "../components/ProductsPage/Pagination";
import { FaPlus } from "react-icons/fa";
import CreateEmployee from "../components/ProductsPage/CreateEmployee";
import { toast } from "react-toastify";
import ProductsList from "../components/ProductsPage/ProductsList";

export default function ProductsPage() {
  const styles = {
    container: "h-full w-full items-start relative py-5 px-5 md:px-20",
    addBtn: "p-5 text-xl bg-[color:var(--primaryColor)] rounded-lg",
    theader: "flex justify-between items-center w-full",
  };

  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);

  const [currentPage, setCurrentPage] = useState(1);

  // get products
  useEffect(() => {
    fetchProducts();
  });

  const fetchProducts = async () => {
    setLoading(true);
    await get(`/products?page=${page}&limit=${limit}`, {}, true).then(
      (data) => {
        setProducts(data.data.data);
        console.log(data.data.data);
      }
    );
    setLoading(false);
  };

  // Change the current page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.container}>
      <PageHeader />
      <ProductsList />
      <Pagination
        handlePageChange={handlePageChange}
        itemsPerPage={limit}
        totalItems={products.count}
        currentPage={currentPage}
      />
    </div>
  );
}
