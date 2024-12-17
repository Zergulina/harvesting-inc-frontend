import React, { useEffect, useState } from 'react';
import Table from '../../components/Table/Table';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useModal from '../../components/Modal/hooks'
import Modal from '../../components/Modal/Modal';
import InputTextWithLabel from '../../components/InputTextWithLabel/InputTextWithLabel';
import Button from '../../UI/Button/Button';

const CropTypeTable = () => {
    const [data, setData] = useState(null)
    const [rowToEdit, setRowToEdit] = useState({ name: "" })
    const [newRow, setNewRow] = useState({ name: "" })
    const [isShowingEditModal, toggleEditModal] = useModal();
    const [isShowingCreateModal, toggleCreateModal] = useModal();
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(process.env.REACT_APP_SERVER_API_PATH + "crop-types")
            .then(result => setData(result.data))
            .catch(msg => console.log(msg))
    }, [])

    const deleteCropType = (id) => {
        axios.delete(process.env.REACT_APP_SERVER_API_PATH + "crop-types/" + id)
            .then(() => setData([...data].filter(row => row.id != id)))
            .catch(msg => console.log(msg))
    }

    const editCropType = () => {
        axios.put(process.env.REACT_APP_SERVER_API_PATH + "crop-types/" + rowToEdit.id, { 'name': rowToEdit.name })
            .then(() => setData([...data].map(row => row.id != rowToEdit.id ? row : rowToEdit)))
            .catch(msg => console.log(msg))
    }

    const createCropType = () => {
        axios.post(process.env.REACT_APP_SERVER_API_PATH + "crop-types/", { 'name': newRow.name })
            .then(() => axios.get(process.env.REACT_APP_SERVER_API_PATH + "crop-types")
                .then(result => setData(result.data))
                .catch(msg => console.log(msg)))
            .catch(msg => console.log(msg))
    }

    const headers = ["Id", "Название"]
    return (
        <div>
            <h1>Типы сельскохозяйственных культур</h1>
            <Button onClick={() => {setNewRow({ name: "", description: "" }); toggleCreateModal()}}>Добавить</Button>
            <Table headers={headers} data={data} deleteCallback={deleteCropType} navigateViaId={(id) => navigate(`${id}/crops`)} editCallback={(row) => { toggleEditModal(); setRowToEdit(row) }} />
            <Modal isShown={isShowingEditModal} closeCallback={toggleEditModal}>
                <h2>Изменить</h2>
                <InputTextWithLabel value={rowToEdit.name} setValue={(newName) => setRowToEdit({ ...rowToEdit, name: newName })} label={"Название"} />
                <Button onClick={() => { editCropType(); toggleEditModal() }}>Изменить</Button>
            </Modal>
            <Modal isShown={isShowingCreateModal} closeCallback={toggleCreateModal}>
                <h2>Добавить</h2>
                <InputTextWithLabel value={newRow.name} setValue={(newName) => setNewRow({ name: newName })} label={"Название"} />
                <Button onClick={() => { createCropType(); toggleCreateModal() }}>Добавить</Button>
            </Modal>
        </div>
    );
};

export default CropTypeTable;