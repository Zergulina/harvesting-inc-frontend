import React, { useEffect, useState } from 'react';
import DropDown from '../../UI/DropDown/DropDown';
import axios from 'axios';
import InputDateWithLabel from '../../components/InputDateWithLabel/InputDateWithLabel';
import classes from './FieldHarvestingReport.module.css'

const FieldHarvestingReport = () => {
    const [customers, setCustomers] = useState([])
    const [selectedCustomer, setSelectedCustomer] = useState(null)
    const [startPeriod, setStartPeriod] = useState(null)
    const [endPeriod, setEndPeriod] = useState(null)
    const [reportData, setReportData] = useState(null)

    const groupByFields = (arr) => {
        const grouped = arr.reduce((acc, item) => {
            const key = `${item.field_id}-${item.field_coords}-${item.crop_type_name}`;
            if (!acc[key]) {
                acc[key] = {
                    field_id: item.field_id,
                    field_coords: item.field_coords,
                    crop_type_name: item.crop_type_name,
                    harvesting: [],
                };
            }
            acc[key].harvesting.push({ day: item.day, crop_amount: item.crop_amount });
            return acc;
        }, {});

        return Object.values(grouped);
    };



    useEffect(() => {
        axios.get(process.env.REACT_APP_SERVER_API_PATH + "customers")
            .then(result => {
                setCustomers(result.data);
            })
            .catch(msg => console.log(msg))
    }, [])

    useEffect(() => {
        if (selectedCustomer && startPeriod && endPeriod) {
            axios.get(process.env.REACT_APP_SERVER_API_PATH + `reports/field-harvesting?start_period=${startPeriod}&end_period=${endPeriod}&customer_id=${selectedCustomer}`)
                .then(result => { setReportData(groupByFields(result.data)); console.log(groupByFields(result.data)) })
                .catch(msg => console.log(msg))
        }
    }, [selectedCustomer, startPeriod, endPeriod])

    const getDatesArray = (start, end) => {
        const arr = [];
        while (start <= end) {
            arr.push(new Date(start));
            start.setDate(start.getDate() + 1);
        }
        return arr;
    };

    return (
        <div className={classes.Report}>
            <DropDown options={customers} selectedOption={selectedCustomer} setSelectedOption={setSelectedCustomer} placeholder={"Выберите заказчика"} className={classes.Selector}/>
            <InputDateWithLabel value={startPeriod} setValue={setStartPeriod} label={"Начало периода"} className={classes.Selector}/>
            <InputDateWithLabel value={endPeriod} setValue={setEndPeriod} label={"Конец периода"} className={classes.Selector}/>
            {
                reportData ?
                    <div>
                        <p className={classes.ReportTitle}>Отчет по уборке полей заказчика</p>
                        <div className={classes.TableWrapper}>
                            <table className={classes.Table}>
                                <thead>
                                    <tr>
                                        <td colSpan={4 + getDatesArray(new Date(Date.parse(startPeriod)), new Date(Date.parse(endPeriod))).length/2}>
                                            {customers.find(customer => customer.id == selectedCustomer).name}
                                        </td>
                                        <td colSpan={4 + getDatesArray(new Date(Date.parse(startPeriod)), new Date(Date.parse(endPeriod))).length/2}>
                                            {new Date(Date.parse(startPeriod)).toLocaleDateString()} - {new Date(Date.parse(endPeriod)).toLocaleDateString()}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2}>
                                            №
                                        </td>
                                        <td rowSpan={2}>
                                            Координаты поля
                                        </td>
                                        <td rowSpan={2}>
                                            Сельхоз культура
                                        </td>
                                        <td colSpan={getDatesArray(new Date(Date.parse(startPeriod)), new Date(Date.parse(endPeriod))).length}>
                                            Убрано центнеров
                                        </td>
                                        <td rowSpan={2}>
                                            Итого
                                        </td>
                                    </tr>
                                    <tr>
                                        {
                                            getDatesArray(new Date(Date.parse(startPeriod)), new Date(Date.parse(endPeriod))).map(date => <td>{date.toLocaleDateString()}</td>)
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        reportData.map((row, index) =>
                                            <tr>
                                                <td>
                                                    {index + 1}.
                                                </td>
                                                <td>
                                                    {row.field_coords}
                                                </td>
                                                <td>
                                                    {row.crop_type_name}
                                                </td>
                                                {
                                                    getDatesArray(new Date(Date.parse(startPeriod)), new Date(Date.parse(endPeriod))).map(day =>
                                                        <td>
                                                            {row.harvesting.find(el => new Date(Date.parse(el.day)).toLocaleDateString() == day.toLocaleDateString()) ? row.harvesting.find(el => new Date(Date.parse(el.day)).toLocaleDateString() == day.toLocaleDateString()).crop_amount : 0}
                                                        </td>)
                                                }
                                                <td>
                                                    {row.harvesting.reduce((acc, item) => acc += item.crop_amount, 0)}
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <></>
            }
        </div>
    );
};

export default FieldHarvestingReport;