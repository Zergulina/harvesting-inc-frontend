import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './Table.module.css'

const Table = ({ headers, data, editCallback, deleteCallback, navigateViaId, className }) => {
    return (
        <div className={classes.TableWrapper}>
            <table border="solid 1px black" className={`${className} ${classes.Table}`}>
                <thead className={classes.TableHeader}>
                    <tr>
                        <td className={classes.TableHeaderCell}>
                            №
                        </td>
                        {
                            navigateViaId ? <td className={classes.TableHeaderCell} /> : <></>
                        }
                        {
                            headers.map((header, index) =>
                                <td key={index} className={classes.TableHeaderCell}>
                                    {header}
                                </td>
                            )
                        }
                        {
                            deleteCallback ? <td /> : <></>
                        }
                        {
                            editCallback ? <td /> : <></>
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data ?
                            data.map((row, index) =>
                                <tr key={row.id} className={classes.Row}>
                                    <td className={classes.Cell}>
                                        {index + 1}
                                    </td>
                                    {
                                        navigateViaId ?
                                            <td className={classes.Cell}>
                                                <Button onClick={() => navigateViaId(row.id)}>Перейти</Button>
                                            </td>
                                            : <></>
                                    }
                                    {
                                        Object.values(row).map((element, index) => 
                                            typeof element == "boolean" ?
                                                <td key={index} className={classes.Cell}>
                                                    {element ? "Да" : "Нет"}
                                                </td>
                                                :
                                                <td key={index} className={classes.Cell}>
                                                    {element}
                                                </td>
                                        )

                                    }
                                    {
                                        editCallback ?
                                            <td className={classes.Cell}>
                                                <Button onClick={() => editCallback(row)}>Изменить</Button>
                                            </td>
                                            : <></>
                                    }
                                    {
                                        deleteCallback ?
                                            <td className={classes.Cell}>
                                                <Button onClick={() => deleteCallback(row.id)}>Удалить</Button>
                                            </td>
                                            : <></>
                                    }
                                </tr>
                            )
                            :
                            <></>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;