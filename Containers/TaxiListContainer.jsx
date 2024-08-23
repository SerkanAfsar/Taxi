"use client";
import { useRef, useState, useCallback, useEffect } from "react";
import styles from "./TaxiListContainer.module.scss";

import TaxiDetail from "@/Components/TaxiDetail/TaxiDetail";
import ModalHarita from "@/Components/UI/Modal";

export default function TaxiListContainer({ data }) {
  const modalRef = useRef();
  const [selectedTaxi, setSelectedTaxi] = useState(null);

  const handleMapClick = useCallback((item) => {
    setSelectedTaxi(item);
  }, []);

  useEffect(() => {
    if (selectedTaxi) {
      const { Modal } =
        typeof document !== undefined
          ? require("bootstrap/dist/js/bootstrap")
          : null;
      const myModal = new Modal(modalRef.current);
      myModal.show();
    }
  }, [selectedTaxi]);

  return (
    <>
      <div className={styles.taxiListContainer} id="taxiList">
        {data?.map((item, index) => (
          <TaxiDetail handleMapClick={handleMapClick} item={item} key={index} />
        ))}
      </div>

      <ModalHarita ref={modalRef} taxi={selectedTaxi} id="modalHarita" />
    </>
  );
}
