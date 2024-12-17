import React, { useState, useEffect } from 'react';
import Table from '../../components/Table/Table';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useModal from '../../components/Modal/hooks'
import Modal from '../../components/Modal/Modal';
import InputTextWithLabel from '../../components/InputTextWithLabel/InputTextWithLabel';
import Button from '../../UI/Button/Button';

const CropTable = () => {
    const [data, setData] = useState(null)
    const [rowToEdit, setRowToEdit] = useState({})
    const [newRow, setNewRow] = useState({ name: "", description: "" })
    const [isShowingEditModal, toggleEditModal] = useModal();
    const [isShowingCreateModal, toggleCreateModal] = useModal();
    const params = useParams()

    useEffect(() => {
        axios.get(process.env.REACT_APP_SERVER_API_PATH + "crop-types/" + params.cropTypeId + "/crops")
            .then(result => {setData(result.data); console.log(result.data)})
            .catch(msg => console.log(msg))
    }, [])

    const deleteCrop = (id) => {
        axios.delete(process.env.REACT_APP_SERVER_API_PATH + "crop-types/" + params.cropTypeId + "/crops/" + id)
            .then(() => setData([...data].filter(row => row.id != id)))
            .catch(msg => console.log(msg))
    }

    const editCrop = () => {
        axios.put(process.env.REACT_APP_SERVER_API_PATH + "crop-types/" + params.cropTypeId + "/crops/" + rowToEdit.id, { 'name': rowToEdit.name, 'description': rowToEdit.description })
            .then(() => setData([...data].map(row => row.id != rowToEdit.id ? row : rowToEdit)))
            .catch(msg => console.log(msg))
    }

    const createCrop = () => {
        console.log(newRow)
        axios.post(process.env.REACT_APP_SERVER_API_PATH + "crop-types/" + params.cropTypeId + "/crops", { 'name': newRow.name, 'description': newRow.description })
            .then(() => axios.get(process.env.REACT_APP_SERVER_API_PATH + "crop-types/" + params.cropTypeId + "/crops")
                .then(result => setData(result.data))
                .catch(msg => console.log(msg)))
            .catch(msg => console.log(msg))
    }


    const headers = ["Id", "Название", "Id типа сельхоз культуры", "Название типа культуры", "Описание"]
    return (
        <div>
            <h1>Сельскохозяйственные культуры</h1>
            <Button onClick={() => { setNewRow({ name: "", description: "" }); toggleCreateModal() }}>Добавить</Button>
            <Table headers={headers} data={data} deleteCallback={deleteCrop} editCallback={(row) => { toggleEditModal(); setRowToEdit(row) }} />
            <Modal isShown={isShowingEditModal} closeCallback={toggleEditModal}>
                <h2>Изменить</h2>
                <InputTextWithLabel value={rowToEdit.name} setValue={(newName) => setRowToEdit({ ...rowToEdit, name: newName })} label={"Название"} />
                <InputTextWithLabel value={rowToEdit.description} setValue={(newDescription) => setRowToEdit({ ...rowToEdit, description: newDescription })} label={"Описание"} />
                <Button onClick={() => { editCrop(); toggleEditModal() }}>Изменить</Button>
            </Modal>
            <Modal isShown={isShowingCreateModal} closeCallback={toggleCreateModal}>
                <h2>Добавить</h2>
                <InputTextWithLabel value={newRow.name} setValue={(newName) => setNewRow({ ...newRow, name: newName })} label={"Название"} />
                <InputTextWithLabel value={newRow.description} setValue={(newDescription) => setNewRow({ ...newRow, description: newDescription })} label={"Описание"} />
                <Button onClick={() => { createCrop(); toggleCreateModal() }}>Добавить</Button>
            </Modal>
        </div>
    );
};

export default CropTable;