import React from 'react'
import {Image, Segment, SemanticCOLORS, Header} from 'semantic-ui-react'
import Container from '../Container/Container'
import Lightrope from '../Lightrope/Lightrope'

const styles = require('./Steps.module.css');

const colors: SemanticCOLORS[] = ['yellow', 'orange', 'red']
const stepsArr = [
    {
        image: '/96/bells.png',
        title: 'Запишись',
        content: 'Заполни информацию о себе, в установленный день узнаешь, кто твой подопечный.'
    },
    {
        image: '/96/presentblue.png',
        title: 'Приготовь подарок',
        content: 'Выбери подарок, можешь основываться на предпочтениях одариваемого или придумать что-то свое.'
    },
    {image: '/96/xtree1.png', title: 'Дари', content: 'Подготовься веселиться, дари и получай подарки!'},
]
const Steps = () => (
    <>
        <Lightrope/>
        <div className={styles.container}>
            <Container>
                <div className={styles.cards}>
                    {stepsArr.map(({image, title, content}, key) =>
                        <Segment className={styles.card} color={colors[key]}
                                 key={key}>
                            <div className={styles.column}>
                                <Image src={image}/>
                                <Header as='h4' color={colors[key]} textAlign='center'>
                                    <div className={styles.title}> {title}</div>
                                    <Header.Subheader>
                                        {content}
                                    </Header.Subheader>
                                </Header>
                            </div>
                        </Segment>)}
                </div>
            </Container>
        </div>
    </>
)

export default Steps
