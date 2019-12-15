import React from 'react'
import withAppLayout from '../components/AppLayout/Layout'
import Lightrope from '../components/Lightrope/Lightrope'
import Hohoho from '../components/Hohoho/Hohoho'
import {Form, Segment, Container, Header} from 'semantic-ui-react'
import ContainerComponent from '../components/Container/Container'

const styles = require('./Create.module.css');

const Create = () => {
    return <>
        <Lightrope/>
        <div className={styles.root}>
            <Container text>
                <Header as='h2'>Создание новой жеребьевки</Header>
                <p>
                   Вы можете организовать новую жеребьевку,
                    заполните информацию и получите ссылку-приглашение для участников жеребьевки.
                    Возможно здесь можно будет посмотреть статистику, но уже поздно, а завтра на работу.
                </p>
            </Container>
            <ContainerComponent>
                <div className={styles.form_container}>
                    <div className={styles.form}>
                        <Segment>
                            <Form>
                                <Form.Input fluid label='Название' placeholder='Название'/>

                                <Form.Group inline>
                                    <label>Максимальная сумма</label>
                                    <Form.Radio
                                        label='1000'
                                        value='1000'
                                    />
                                    <Form.Radio
                                        label='2000'
                                        value='2000'
                                    />
                                    <Form.Radio
                                        label='3000'
                                        value='3000'
                                    />
                                    <Form.Radio
                                        label='Не указана'
                                        value='empty'
                                    />
                                </Form.Group>
                                <Form.Radio
                                    label='Свой вариант'
                                    value='custom'
                                />
                                <Form.Input placeholder='Сумма' width={5}/>
                                <Form.TextArea label='Описание' placeholder='Описание'/>
                                <Form.Button color="red">Создать</Form.Button>
                            </Form>
                        </Segment>
                    </div>
                </div>
            </ContainerComponent>
        </div>
        <Hohoho small/>
    </>
}


export default withAppLayout()(Create)
