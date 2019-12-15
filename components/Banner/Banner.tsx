import React, {useCallback, useEffect, useRef} from 'react'
import {daysDecl, hoursDecl, minDecl, secDecl} from '../../utils'
import Link from 'next/link'

const styles = require('./Banner.module.css');

const Banner = () => {
    const time: React.MutableRefObject<HTMLDivElement | null> = useRef(null);

    const getTimeRemaining = useCallback((endtime) => {
        const date: any = new Date();
        const t = Date.parse(endtime) - Date.parse(date);
        const seconds = Math.floor((t / 1000) % 60);
        const minutes = Math.floor((t / 1000 / 60) % 60);
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        const days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }, [])

    const initializeClock = useCallback((_id, endtime) => {
        function updateClock() {
            const t = getTimeRemaining(endtime);

            const d = t.days;
            const h = ('0' + t.hours).slice(-2);
            const m = ('0' + t.minutes).slice(-2);
            const s = ('0' + t.seconds).slice(-2);

            if (time.current) {
                time.current.innerHTML = `
                ${d} ${daysDecl(d)}
                ${h} ${hoursDecl(h)}
                ${m} ${minDecl(m)}
                ${s} ${secDecl(s)}
                `;
            }


            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
    }, [time]);

    useEffect(() => {
        const deadline = new Date('2020-01-01');
        console.log(deadline);
        initializeClock('countdown', deadline);
    }, [])

    return <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.subtitle}>
                До Нового Года осталось
            </div>
            <div className={styles.title} ref={time}>&nbsp;</div>
            <Link href="/create">
                <button className={styles.button}>
                    Участвовать
                </button>
            </Link>
        </div>
    </div>
}

export default Banner
