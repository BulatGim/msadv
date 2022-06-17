import logo from './imgs/logo.svg';
import phone from "./imgs/phone.svg";
import mail from "./imgs/mail.svg"
import main from "./imgs/main.svg"
import aboutUs from "./imgs/aboutUs.svg"
import ourProduction1 from "./imgs/ourProduction1.svg"
import ourProduction2 from "./imgs/ourProduction2.svg"
import close from "./imgs/Close1.svg"
import advantage1 from "./imgs/advantages1.svg";
import advantage2 from "./imgs/advantages2.svg";
import advantage3 from "./imgs/advantages3.svg";
import advantage4 from "./imgs/advantages4.svg";
import arrow from "./imgs/Arrow.svg"
import ex1 from './imgs/example1.svg';
import ex1_col from './imgs/example1_col.svg';
import ex2 from './imgs/example2.svg';
import ex2_col from './imgs/example2_col.svg';
import ex3 from './imgs/example3.svg';
import ex3_col from './imgs/example3_col.svg';
import ex4 from './imgs/example4.svg';
import ex4_col from './imgs/example4_col.svg';
import ex5 from './imgs/example5.svg';
import ex5_col from './imgs/example5_col.svg';
import ex6 from './imgs/example6.svg';
import ex6_col from './imgs/example6_col.svg';
import ex7 from './imgs/example7.svg';
import ex7_col from './imgs/example7_col.svg';
import ex8 from './imgs/example8.svg';
import ex8_col from './imgs/example8_col.svg';
import ex9 from './imgs/example9.svg';
import ex9_col from './imgs/example9_col.svg';
import ex10 from './imgs/example10.svg';
import ex10_col from './imgs/example10_col.svg';
import ex11 from './imgs/example11.svg';
import ex11_col from './imgs/example11_col.svg';
import ex12 from './imgs/example12.svg';
import ex12_col from './imgs/example12_col.svg';
import ex13 from './imgs/example13.svg';
import ex13_col from './imgs/example13_col.svg';
import ex14 from './imgs/example14.svg';
import ex14_col from './imgs/example14_col.svg';
import ex15 from './imgs/example15.svg';
import ex15_col from './imgs/example15_col.svg';
import ex16 from './imgs/example16.svg';
import ex16_col from './imgs/example16_col.svg';

import * as Scroll from 'react-scroll';
import { Link } from "react-scroll";


import './App.css';
import React, { useState, useEffect, useRef } from "react";
import FormInput from "./atoms/formInput";

function App() {
    const [pic, setPic] = useState('')
    const [visible, setVisible] = useState(false)
    const [values, setValues] = useState({});
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const [userError, setUserError] = useState([])

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [tel, setTel] = useState()
    const [compani, setCompany] = useState("")

    /*function handleChange(e) {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }*/
    console.log(validatePhone(tel))
    let orderForm = useRef(null);
    let handleForm = async (e) => {
        e.preventDefault()
        emailValidation();
        nameValidation();
        tel? (validatePhone(tel)?(hideUserError("tel")):(showUserError("tel", "Укажите, пожалуйста, корректный номер телефона"))): showUserError("tel", "Телефон не может быть пустым")
        if(userError.length<1){
            setModalOpen(false);
            let formData = new FormData(orderForm.current)
            console.log(orderForm.current)
            setTel("")
            setCompany("")
            setName("")
            setEmail("")
            try {
                const response = await fetch('/send.php', {
                    method: 'POST',
                    body: formData
                });
                const result = await response.json();
                setModalOpen(false)
            } catch (error) {
                console.log(error);
            }
        }else{
            return
        }
    }
    useEffect(() => {
        visible ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible'
    }, [visible])
    function createText(item) {
        return { __html: item.text };
    }
    function exampleOpen(item) {
        setPic(item.pic_col)
        setTimeout(()=>setVisible(true),250)
    }
    function handleClose(e) {
        if (e.target.getAttribute('data-modal') === 'hide') {
            setVisible(false)
        }
    }

    const examples = [
        { text: 'ЛЕГКИЕ POSM<br/>(КАРТОН)', pic: ex1, pic_col: ex1_col },
        { text: 'ЛЕГКИЕ POSM<br/>(ПЛАСТИК)', pic: ex2, pic_col: ex2_col },
        { text: 'ЛЕГКИЕ POSM<br/>(ДЕРЕВО)', pic: ex3, pic_col: ex3_col },
        { text: 'ЛЕГКИЕ POSM<br/>(МЕТАЛЛ)', pic: ex4, pic_col: ex4_col },
        { text: 'ЛЕГКИЕ POSM<br/>(НАПОЛЬНЫЙ ДИСПЛЕЙ,<br/>ГОФРОКАРТОН)', pic: ex5, pic_col: ex5_col },
        { text: 'ДОЛГОСРОЧНЫЕ POSM<br/>(НАПОЛЬНЫЙ ДИСПЛЕЙ-ЛДСП,<br/>ПЛАСТИК)', pic: ex6, pic_col: ex6_col },
        { text: 'ДОЛГОСРОЧНЫЕ POSM<br/>(НАПОЛЬНЫЙ ДИСПЛЕЙ,<br/>МАССИВ ДЕРЕВА)', pic: ex7, pic_col: ex7_col },
        { text: 'ДОЛГОСРОЧНЫЕ POSM<br/>(НАПОЛЬНЫЙ ДИСПЛЕЙ-МЕТАЛЛ,<br/>ПЛАСТИК)', pic: ex8, pic_col: ex8_col },
        { text: 'ДОЛГОСРОЧНЫЕ POSM<br/>(ПАЛЛЕТНАЯ ДЕКОРАЦИЯ,<br/>ЛДСП)', pic: ex9, pic_col: ex9_col },
        { text: 'БРЕНД-ОСТРОВ', pic: ex10, pic_col: ex10_col },
        { text: 'SHOP-IN-SHOP', pic: ex11, pic_col: ex11_col },
        { text: 'ОФОРМЛЕНИЕ КАТЕГОРИИ<br/>В ТОРГОВЫХ ТОЧКАХ', pic: ex12, pic_col: ex12_col },
        { text: 'ПЕЧАТНАЯ ПРОДУКЦИЯ', pic: ex13, pic_col: ex13_col },
        { text: 'ПРОМООДЕЖДА', pic: ex14, pic_col: ex14_col },
        { text: 'ПРОМОСУВЕНИРЫ', pic: ex15, pic_col: ex15_col },
        { text: 'ПОДАРОЧНАЯ УПАКОВКА', pic: ex16, pic_col: ex16_col },
    ]
    let scroll = Scroll.animateScroll;
    const toTop = () => scroll.scrollToTop()
    const [modalOpen, setModalOpen] = useState(false)
    const advantages = [{
        img: advantage1,
        description: "КЛИЕНТООРИЕНТИРОВАННОСТЬ"
    }, {
        img: advantage2,
        description: "КОНТРОЛЬ КАЧЕСТВА"
    }, {
        img: advantage3,
        description: "ОПТИМАЛЬНЫЕ СРОКИ"
    }, {
        img: advantage4,
        description: "ОПТИМАЛЬНЫЕ ЦЕНЫ"
    }
    ]
    function hideUserError(formInput) {
        for (let i = 0; i < userError.length; i++){
            if (userError[i].formInput === formInput){
                let arr = userError;
                arr.splice(i, 1)
                setUserError(arr)
                forceUpdate();
            }
        }
    }
    function showUserError(formInput, errorMessage){
        let prev;
        userError.map((item)=>{
            if (item.formInput===formInput){
                prev=true
            }
        })
        if (prev){
            return
        }
        let obj = {
            error: errorMessage,
            formInput: formInput
        }
        let errors = userError;
        errors.push(obj);
        setUserError(errors)
        forceUpdate();
    }
    function emailValidation () {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return (email?((email=== '')
            ? showUserError("email", "Email не может быть пустым")
            : hideUserError("email")
            || (!regex.test(String(email).toLowerCase()))
                ? showUserError("email", "Укажите, пожалуйста, корректный email")
                : hideUserError("email")):(showUserError("email", "Email не может быть пустым")))
    }
    function nameValidation(){
        return (name? ((name ==='')?showUserError("name", "Обязательное поле"):hideUserError('name')):(showUserError("name", "Имя не может быть пустым")))
    }
    function validatePhone(phone){
        let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        return regex.test(phone);
    }
    useEffect(()=>{
        console.log(userError)
    }, [userError])
    return (
        <div className="App">
            <section className={modalOpen ? "header_hide" : "header"} id="header">
                <div className="header__container">
                    <div className="aboutCompany">
                        <img src={logo} alt="" className="aboutCompany__logo" />
                        <h3 className="aboutCompany__title">POS-МАТЕРИАЛЫ, ПОЛИГРАФИЯ, УПАКОВКА,<span className="aboutCompany__subtitle">ДИЗАЙН И ПРОИЗВОДСТВО</span></h3>
                    </div>
                    <div className="contacts">
                        <a className="phone" href="tel:+74957815518">
                            <img className="phone__img" src={phone} alt="" />
                            <p className="phone__link"><p>+7 (495) 781 55 18</p></p>
                        </a>
                        <a className="mail" href="mailto:ask@htmlbook.ru">
                            <img className="mail__img" src={mail} alt="" />
                            <p className="mail__address">HLP@MS-ADV.RU</p>
                        </a>
                    </div>
                </div>
            </section>
            <section className="mainImg">
                <img src={main} alt="" />
            </section>
            <section className="aboutUs">
                <h1 className="aboutUs__title">О НАС</h1>
                <h3 className="aboutUs__description">НАША КОМПАНИЯ БЫЛА ОСНОВАНА В 2000 ГОДУ.</h3>
                <h3 className="aboutUs__description">МЫ СПЕЦИАЛИЗИРУЕМСЯ НА РАЗРАБОТКЕ ДИЗАЙНА И ПРОИЗВОДСТВЕ РЕКЛАМНЫХ МАТЕРИАЛОВ</h3>
                <h3 className="aboutUs__description">ДЛЯ ИЗВЕСТНЫХ РОССИЙСКИХ И МЕЖДУНАРОДНЫХ БРЕНДОВ.</h3>
                <h3 className="aboutUs__description">МЫ НАХОДИМ ИНДИВИДУАЛЬНЫЙ ПОДХОД К КАЖДОМУ КЛИЕНТУ, ВЫСТРАИВАЯ ДОЛГОСРОЧНЫЕ ПАРТНЕРСКИЕ ОТНОШЕНИЯ.</h3>
                <img className="aboutUs__img" src={aboutUs} alt="" />
            </section>
            <section className="ourProduction">
                <div className="ourProduction__container">
                    <h1 className="ourProduction__title">НАША ПРОДУКЦИЯ И УСЛУГИ</h1>
                    <img src={ourProduction1} alt="" className="ourProduction__img" />
                    <img src={ourProduction2} alt="" className="ourProduction__img" />
                </div>
            </section>
            <section className="examples">
                <h1 className="examples__title">ПРИМЕРЫ НАШИХ РАБОТ</h1>
                <div className="examples__container">
                    {examples.map((item) =>
                        <div className="examples__content" onClick={() => exampleOpen(item)}>
                            <img src={item.pic} alt="" className="examples__item" />
                            <div className="examples__background">
                                <h3 className="examples__text" dangerouslySetInnerHTML={createText(item)}></h3>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <section className={visible ? "example__modal example__modal_visible" : "example__modal"} data-modal='hide' onClick={(e) => handleClose(e)}>
                <div className="example__content">
                    <img src={pic} alt="" className="examples__item" />
                </div>
                <button className="example__close" onClick={() => setVisible(false)}></button>
            </section>
            <section className="ourAdvantages">
                <h1 className="ourAdvantages__title">НАШИ ПРЕИМУЩЕСТВА</h1>
                <div className="ourAdvantages__container">
                    {advantages.map((item) =>
                        <div className="ourAdvantages__item">
                            <img src={item.img} alt="" className="ourAdvantages__itemImg" />
                            <h4 className="ourAdvantages__itemDescription">{item.description}</h4>
                        </div>
                    )}
                </div>
                <button className="ourAdvantages__btn" onClick={() => setModalOpen(true)}>
                    <h4 className="ourAdvantages__btn-text">НАПИШИТЕ НАМ И МЫ ВЫШЛЕМ ВАМ НАШЕ ПОРТФОЛИО</h4>
                    <div className="animation__container">
                        <div className="animation__highlight"></div>
                    </div>
                </button>
            </section>
            <section className="footer">
                <div className="footer__container">
                    <h4 className="footer__RR">© 2022 MS ADV</h4>
                    <Link className="scrollToTop" activeClass="rocket_active"
                        onClick={toTop}
                        spy={true}
                        to='header'
                    >
                        <h4 className="scrollToTop__description">НАВЕРХ</h4>
                        <img src={arrow} alt="" className="scrollToTop__img" />
                    </Link>
                </div>
            </section>
            {modalOpen ? (
                <section className="modal">
                    <div className="modal__container">
                        <h3 className="modal__title">ОТПРАВЬТЕ ВАШИ ДАННЫЕ</h3>
                        <h4 className="modal__description">И МЫ ВЫШЛЕМ ПОЛНОЕ ПОРТФОЛИО</h4>
                        <form ref={orderForm} onSubmit={handleForm}>
                            <FormInput name={"email"} error={userError} value={email} onChange={setEmail} placeholder={"E-MAIL"} isRequired={true}/>
                            <FormInput name={"name"} error={userError} value={name} onChange={setName} placeholder={"ИМЯ"} isRequired={true}/>
                            <FormInput name={"tel"} error={userError} value={tel} onChange={setTel} placeholder={"ТЕЛЕФОН"} isRequired={true}/>
                            <FormInput name={"compani"} error={userError} value={compani || ""} onChange={setCompany} placeholder={"НАЗВАНИЕ ВАШЕЙ КОМПАНИИ"}/>
                            {/*<input type="text" name='name' value={values.name || ''} onChange={handleChange} placeholder="ИМЯ" className="modal__input" />
                            <input type="text" name='tel' value={values.tel || ''} onChange={handleChange} placeholder="ТЕЛЕФОН" className="modal__input" />
                            <input type="text" name='compani' value={values.compani || ''} onChange={handleChange} placeholder="НАЗВАНИЕ ВАШЕЙ КОМПАНИИ" className="modal__input" />*/}
                            <div className="modal-formError">
                                {userError&& userError.map((item)=>
                                    <div className="modal-formError__error">
                                        <h3>{item.error}</h3>
                                    </div>
                                )}
                            </div>
                            <button type='submit' className="modal__btn">ОТПРАВИТЬ</button>

                        </form>
                        <h4 className="modal__agreement">ОТПРАВЛЯЯ ЗАЯВКУ, ВЫ ДАЕТЕ СОГЛАСИЕ НА ОБРАБОТКУ ВАШИХ ПЕРСОНАЛЬНЫХ ДАННЫХ</h4>
                        <img src={close} alt="" className="modal__close" onClick={() => setModalOpen(false)} />
                    </div>
                </section>
            ) : ""}
        </div>
    );
}

export default App;
