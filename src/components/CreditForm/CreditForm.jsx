import React, { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import axios from '../../axios';

import styles from './CreditForm.module.scss';
import FormInput from '../UI/FormInput/FormInput';
import FormSelect from '../UI/FormSelect/FormSelect';

const CreditForm = ({ setOpenModal }) => {
  const models = useSelector((state) => state.category.data?.model) || [];
  const timeVariant = [12, 24, 36, 48, 60, 72, 84, 96];

  const userdata = useSelector((state) => state.auth.userdata);
  const modelsList = models.map((item) => item.name);
  const {
    handleSubmit,
    register,
    formState: { isValid, errors },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      model: '',
      equipment: '',
      name: '',
      phone: '',
      firstPay: 0,
      time: '',
    },
    mode: 'onBlur',
  });

  useEffect(() => {
    if (userdata) {
      setValue('name', userdata.name);
    }
  }, [userdata]);

  const findEquipment = (car) => {
    return models.find((item) => item.name === car)?.equipment || [];
  };

  const model = watch('model');
  const equipment = findEquipment(model);
  const firstPay = watch('firstPay');
  const time = Number(watch('time'));

  const onSubmit = async (value) => {
    try {
      const data = {
        summ: sum,
        perMonth: perMonth,
        user: userdata._id,
        ...value,
      };
      await axios.post('/credit', data);
      alert('Кредит оформлен, с вами свяжется менеджер!');
    } catch {
      alert('Не удалось оформить кредит, попробуйте позже!');
    }
    setOpenModal(false);
  };

  const sum = useMemo(() => {
    const price = models.find((obj) => obj.name === model)?.price || 0;
    return price + (price * 7) / 100;
  }, [model]);

  const perMonth = useMemo(() => {
    if (time === 0 || firstPay < sum * 0.05 || firstPay > sum) {
      return 0;
    }
    const result = (sum - firstPay) / time;
    return Math.round(result);
  }, [sum, time, firstPay]);

  return (
    <form>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.imgbox}>
            <img
              src={
                models.find((item) => item.name === model)?.imgUrl ||
                'https://avanta-avto-credit.ru/upload/resize_cache/iblock/5a9/600_600_140cd750bba9870f18aada2478b24840a/5a914707efe778bb78eb2a9b1918be8b.png'
              }
              alt=""
            />
          </div>
          <div className={styles.info}>
            <h4>Оставьте заявку на кредит и получи скидку до 20%</h4>
            <ul>
              <li>Выберите автомобиль</li>
              <li>Заполните заявку</li>
              <li>С вами свяжется менеджер</li>
              <li>Приезжаете на оформление</li>
            </ul>
          </div>
        </div>

        <div className={styles.right}>
          <FormSelect
            label={'Модель'}
            placeholder={'Выберите модель'}
            options={modelsList || []}
            {...register('model', { required: 'Выберите модель' })}
            errors={errors.model?.message}
          />
          <FormSelect
            label={'Комплектация'}
            placeholder={'Выберите комплектацию'}
            options={equipment}
            {...register('equipment', { required: 'Выберите комплектацию' })}
            errors={errors.equipment?.message}
          />
          <FormInput
            label={'Имя'}
            placeholder={'Введите имя'}
            type={'text'}
            {...register('name', { required: 'Введите имя' })}
            errors={errors.name?.message}
          />
          <FormInput
            label={'Телефон'}
            placeholder={'+7'}
            type={'text'}
            {...register('phone', { required: 'Введите телефон' })}
            errors={errors.phone?.message}
          />
          <FormInput
            label={'Первый взнос'}
            placeholder={'200 000'}
            type={'number'}
            {...register('firstPay', {
              required: 'Введите первый взнос',
              validate: (value) => {
                if (value > sum) {
                  return 'Первый взнос не должен превышать сумму';
                } else if (value < sum * 0.05) {
                  return `Первый взнос должен быть больше ${sum * 0.05}₽ (5% от суммы)`;
                }
              },
            })}
            errors={errors.firstPay?.message}
          />
          <FormSelect
            label={'Срок кредитования в месяцах'}
            placeholder={'Выберите срок'}
            options={timeVariant}
            {...register('time', { required: 'Выберите срок кредитования' })}
            errors={errors.time?.message}
          />
        </div>
      </div>
      <div className={styles.sumblock}>
        <div className={styles.sum}>
          <h5>Итоговая сумма кредита (7%)</h5>
          <div>{sum} ₽</div>
        </div>
        <div className={styles.sum}>
          <h5>Платеж за месяц</h5>
          <div>{perMonth} ₽</div>
        </div>
      </div>

      <div className={styles.btnblock}>
        <button disabled={!isValid} onClick={handleSubmit(onSubmit)} className={styles.btn}>
          Оформить кредит
        </button>
      </div>
    </form>
  );
};

export default CreditForm;
