import React, { useEffect, useState } from 'react';
import Table from '../../components/Table/Table';
import axios from 'axios';
import useModal from '../../components/Modal/hooks'
import Modal from '../../components/Modal/Modal';
import InputTextWithLabel from '../../components/InputTextWithLabel/InputTextWithLabel';
import Button from '../../UI/Button/Button';
import CheckBoxWithLabel from '../../components/CheckBoxWithLabel/CheckBoxWithLabel';

const StatusTable = () => {
    const [data, setData] = useState(null)
    const [rowToEdit, setRowToEdit] = useState({ name: "", is_available: false })
    const [newRow, setNewRow] = useState({ name: "", is_available: false })
    const [isShowingEditModal, toggleEditModal] = useModal();
    const [isShowingCreateModal, toggleCreateModal] = useModal();

    useEffect(() => {
        axios.get(process.env.REACT_APP_SERVER_API_PATH + "statuses")
            .then(result => {setData(result.data); console.log(result.data)})
            .catch(msg => console.log(msg))
    }, [])

    const deletePost = (id) => {
        axios.delete(process.env.REACT_APP_SERVER_API_PATH + "statuses/" + id)
            .then(() => setData([...data].filter(row => row.id != id)))
            .catch(msg => console.log(msg))
    }

    const editPost = () => {
        axios.put(process.env.REACT_APP_SERVER_API_PATH + "statuses/" + rowToEdit.id, { 'name': rowToEdit.name, 'is_available': rowToEdit.is_available })
            .then(() => setData([...data].map(row => row.id != rowToEdit.id ? row : rowToEdit)))
            .catch(msg => console.log(msg))
    }

    const createPost = () => {
        axios.post(process.env.REACT_APP_SERVER_API_PATH + "statuses/", { 'name': newRow.name, 'is_available': newRow.is_available })
            .then(() => axios.get(process.env.REACT_APP_SERVER_API_PATH + "statuses")
                .then(result => setData(result.data))
                .catch(msg => console.log(msg)))
            .catch(msg => console.log(msg))
    }

    const headers = ["Id", "Название", "Доступно для выезда"]
    return (
        <div>
            <h1>Статусы сельхоз техники</h1>
            <Button onClick={() => { setNewRow({ name: "", is_available: false }); toggleCreateModal() }}>Добавить</Button>
            <Table headers={headers} data={data} deleteCallback={deletePost} editCallback={(row) => { toggleEditModal(); setRowToEdit(row) }} />
            <Modal isShown={isShowingEditModal} closeCallback={toggleEditModal}>
                <h2>Изменить</h2>
                <InputTextWithLabel value={rowToEdit.name} setValue={(newName) => setRowToEdit({ ...rowToEdit, name: newName })} label={"Название"} />
                <CheckBoxWithLabel value={rowToEdit.is_available} setValue={(newIsAvailable) => setRowToEdit({ ...rowToEdit, is_available: newIsAvailable })} label={"Доступно для выезда"}/>
                <Button onClick={() => { editPost(); toggleEditModal() }}>Изменить</Button>
            </Modal>
            <Modal isShown={isShowingCreateModal} closeCallback={toggleCreateModal}>
                <h2>Добавить</h2>
                <InputTextWithLabel value={newRow.name} setValue={(newName) => setNewRow({ name: newName })} label={"Название"} />
                <CheckBoxWithLabel value={newRow.is_available} setValue={(newIsAvailable) => setNewRow({ ...newRow, is_available: newIsAvailable })} label={"Доступно для выезда"}/>
                <Button onClick={() => { createPost(); toggleCreateModal() }}>Добавить</Button>
            </Modal>
        </div>
    );
};

export default StatusTable;