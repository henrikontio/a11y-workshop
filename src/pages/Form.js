import React, { useState } from 'react';
import arrowRight from '../images/arrow-right.png';
import { Helmet } from 'react-helmet';

const TextInput = ({ name, value, label, onChange }) => {
  return (
    <label className={'input text-input'}>
      <span className={'text-input-label'}>{label}</span>
      <input type={'text'} name={name} onChange={onChange} value={value}/>
    </label>
  );
};

const RadioGroupInput = ({ name, label, value, onChange, options }) => {
  return (
    <fieldset className={'input radio-input'}>
      <legend className={'radio-input-label'}>{label}</legend>
      {options?.map(o => {
        return (
          <div key={o}>
            <input id={`${name}-${o}`} type={'radio'} checked={value === o} value={o} onChange={onChange} name={name} />
            <label htmlFor={`${name}-${o}`} className={'radio-input-label'}>{o}</label>      
          </div>
        )
      })}
    </fieldset>
  )
};

const CheckboxInput = ({ name, label, value, onChange }) => {
  return (
    <label className={'input checkbox-input'}>
      <span className={'checkbox-input-label'}>{label}</span>
      <input type={'checkbox'} checked={value} onChange={onChange} name={name} />
    </label>
  )
};

const SelectInput = ({ name, label, value, onChange, options }) => {
  return (
    <div className={'input selet-input'}>
      <label htmlFor={name} className={'select-input-label'}>{label}:</label>
      <select id={name} name={name} value={value} onChange={onChange}>
      {options?.map(o => {
        return (
          <option key={o} value={o}>{o}</option>
        )
      })}
      </select>
    </div>
  )
};

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    city: '',
    weather: '',
    isHealthy: false,
    favAnimal: '',
  });

  const updateForm = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    updateForm(name, value);
  };

  const onSubmit = (event) => {
    console.log(event);
  };
  
  const radioOptions = ['Cool 😎', 'Warm 😅', 'Hot 🥵'];
  const selectOptions = ['Horse 🐎', 'Frog 🐸', 'Lizard 🦎'];

  return (
    <main className={'main-content'}>
      <h2>Signup for your life's best opportunity</h2>
      <p>Nullam sit amet libero ac lacus molestie sodales eu id nibh. Integer sodales est est, eget auctor neque
        venenatis sit amet. Mauris vehicula lorem sed ante semper hendrerit. Ut rutrum porttitor magna, eu tincidunt
        risus convallis non. Fusce massa nulla, tincidunt at aliquet non, rutrum sit amet lectus. Morbi posuere orci
        eros, non lacinia nisi congue at. Duis nibh leo, gravida ac fermentum eget, sagittis quis nibh. Vestibulum
        interdum dictum est sed luctus. Integer finibus pretium lacus sit amet hendrerit. Maecenas gravida sed augue vel
        lobortis. Praesent at enim dapibus, imperdiet purus quis, suscipit odio. Etiam at diam suscipit, egestas ante
        ac, auctor orci. Curabitur a pharetra massa, vel tempus nibh. Integer iaculis leo ac nunc commodo volutpat.
        Integer auctor, risus sit amet luctus consequat, est neque commodo sem, nec tristique quam nibh eget mi.</p>
      <div>
        <TextInput name={'name'} value={form.name} onChange={onChange} label={'Name'}/>
        <TextInput name={'age'} value={form.age} onChange={onChange} label={'Age'}/>
        <TextInput name={'city'} value={form.city} onChange={onChange} label={'City'}/>
        <hr />
        <RadioGroupInput name={'weather'} options={radioOptions} onChange={onChange} label={'Weather'} value={form.weather} />
        <hr />
        <CheckboxInput name={'isHealthy'} onChange={onChange} label={'Are you healthy?'} value={form.isHealthy} />
        <hr />
        <SelectInput name={'favAnimal'} onChange={onChange} label={'What\'s your favourite animal?'} value={form.favAnimal} options={selectOptions} />
        <button type={'button'} className={'button'} onClick={onSubmit}>
          Submit form
          <img alt={'arrow pointing right'} src={arrowRight} className={'button-icon'} />
        </button>
      </div>
      <Helmet>
        <title>a11y workshop signup form</title>
      </Helmet>
      </main>
  );
};

export default Form;
