import axios from 'axios';
import React, { useEffect, useState } from 'react';
import classes from './MachineReport.module.css'

const MachineReport = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(process.env.REACT_APP_SERVER_API_PATH + `reports/machines`)
            .then(result => setData(result.data))
            .catch(msg => console.log(msg))
    }, [])

    return (
        <div className={classes.Report}>
            <p className={classes.ReportTitle}>Отчет по несписанной технике</p>
            <p className={classes.ReportTime}>Актуально на {(new Date()).toLocaleDateString()}</p>
            <div className={classes.TableWrapper}>
                {
                    data ?
                        <table className={classes.Table}>
                            <thead>
                                <tr>
                                    <td>
                                        №
                                    </td>
                                    <td>
                                        Вид сельхоз техники
                                    </td>
                                    <td>
                                        Модель
                                    </td>
                                    <td>
                                        Инв. номер
                                    </td>
                                    <td>
                                        Статус
                                    </td>
                                    <td>
                                        Дата покупки
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((row, index) => <tr>
                                        <td>
                                            {index + 1}.
                                        </td>
                                        <td>
                                            {row.type_name}
                                        </td>
                                        <td>
                                            {row.model_name}
                                        </td>
                                        <td>
                                            {row.inv_number}
                                        </td>
                                        <td>
                                            {row.status}
                                        </td>
                                        <td>
                                            {new Date(Date.parse(row.buy_date)).toLocaleDateString()}
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                        :
                        <></>
                }
            </div>
        </div>
    );
};

export default MachineReport;