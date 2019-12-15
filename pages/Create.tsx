import React from 'react'
import withAppLayout from '../components/AppLayout/Layout'
import Lightrope from '../components/Lightrope/Lightrope'
import Hohoho from '../components/Hohoho/Hohoho'
import {Form, Grid, Segment} from 'semantic-ui-react'

const Create = () => {
    return <>
        <Lightrope/>
        <div style={{width: 500, margin: '24px auto'}}>
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
        <Hohoho small/>
    </>
}


export default withAppLayout()(Create)
