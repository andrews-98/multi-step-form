import styled from "styled-components";
import { Heading } from "../../components/Heading/Heading";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ServiceContext from "../../context/serviceContext";
import { useEffect } from "react";

const schema = yup.object({
    name: yup.string().required('Name is requreid'),
    email: yup.string().email('Is not valid email address').required('Email is required'),
    phone: yup.string().required('Phone is required').min(10, 'This number is incorrect')
})

const StyledLabel = styled.label`
  color: hsl(213, 96%, 18%);
`
const StyledInput = styled.input`
  display:block;
  width:100%;
  font-size:1rem;
  font-weight: 700;
  color: hsl(213, 96%, 18%);
  padding: 10px;
  border-radius: 8px;
  border: 1px solid;
  outline: none;
  border-color: hsl(231, 11%, 63%);
  
  &:focus {
    border-color:hsl(213, 96%, 18%);
  }
  &::placeholder {
    font-weight: 100;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
`
const ErrorMessage = styled.small`
 float: right;
 color: red;
`

const heading = {
    title: 'Personal Info',
    text: 'Please provide your name, email address and phone number'
}

export const PersonalInfo = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, getValues, setValue } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema)
    });
    const { userDetails, setUserDetails } = useContext(ServiceContext);

    useEffect(() => {
        setValue('name', userDetails.name)
        setValue('email', userDetails.email)
        setValue('phone', userDetails.phone)
    }, [])

    const onSumbit = () => {
        const { name, email, phone } = getValues();

        setUserDetails({
            ...userDetails,
            name,
            email,
            phone
        })

        navigate('/plan')
    }

    return <>

        <div>
            <Heading title={heading.title} text={heading.text} />
            <form style={{ lineHeight: '2', marginTop: '1rem' }}
                onSubmit={handleSubmit(onSumbit)}
            >
                <div style={{ marginBottom: '2.5rem' }}>
                    <StyledLabel>Name</StyledLabel>
                    <StyledInput
                        placeholder="Name"
                        {...register("name")}
                    />
                    {errors.name && <ErrorMessage>{errors.name?.message}</ErrorMessage>}
                    <StyledLabel>Email Address</StyledLabel>
                    <StyledInput
                        placeholder="Email"
                        {...register("email")}
                    />
                    {errors.email && <ErrorMessage>{errors.email?.message}</ErrorMessage>}
                    <StyledLabel>Phone Number</StyledLabel>
                    <StyledInput
                        type="number"
                        placeholder="e.g +44 28428284"
                        {...register("phone")}
                    />
                    {errors.phone && <ErrorMessage>{errors.phone?.message}</ErrorMessage>}
                </div>
                <div style={{ float: 'right' }}>
                    <Button color={'primary'}>Next Step</Button>
                </div>
            </form>
        </div>
    </>
}