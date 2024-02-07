import React from 'react';
import style from '@/app/(afterLogin)/layout.module.css';

export default function AfterLogin({ children }: { children: React.ReactNode }) {
    return (
        <div className={style.container}>
            <header className={style.leftSectionWrapper}>
                <section className={style.leftSection}>g</section>
            </header>
            <div className={style.rightSectionWrapper}>
                <div className={style.rightSectionInner}>
                    <main className={style.main}>m</main>
                    <section className={style.rightSection}>r</section>
                </div>
            </div>
        </div>
    );
}
