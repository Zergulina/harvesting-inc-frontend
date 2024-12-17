import axios from 'axios';
import React, { useEffect, useState } from 'react';
import classes from './PeopleExperienceReport.module.css'
import Table from '../../components/Table/Table';

const PeopleExperienceTable = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(process.env.REACT_APP_SERVER_API_PATH + `reports/people-experience`)
            .then(result => setData(result.data))
            .catch(msg => console.log(msg))
    }, [])

    return (
        <div className={classes.Report}>
            <p className={classes.ReportTitle}>Отчет по сотрудникам</p>
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
                                        ФИО
                                    </td>
                                    <td>
                                        Должности
                                    </td>
                                    <td>
                                        Стаж работы (лет)
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
                                            {row.fcs}
                                        </td>
                                        <td>
                                            {row.posts}
                                        </td>
                                        <td>
                                            {row.experience}
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

export default PeopleExperienceTable;