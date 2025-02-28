import React from "react";
import { FaBeer, FaRegUser, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { LiaIdCard } from "react-icons/lia";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";

let schema = yup.object().shape({
  nome: yup.string().required("O nome é obrigatório").min(3),
  email: yup.string().required("O email é obrigatório").email("Digite um email válido"),
  telefone: yup.string().required("O telefone é obrigatório").min(11),
  cpf: yup.string().required("O CPF é obrigatório").min(11),
  cep: yup.string().required("O CEP é obrigatório").min(8)
});

export default function InformacoesPessoaisForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  return (
    <form onSubmit={handleSubmit((data: any) => console.log(data))}>
      <h2 className="bg-blue-900 text-white">CADASTRE-SE<FaBeer /></h2>
      <hr />
      <FaRegUser /><label>Digite seu nome: </label>
      <input {...register("nome")} />
      <p>{errors.nome?.message}</p>
      <br />
      <MdOutlineMailOutline /><label>Digite seu email: </label>
      <input {...register("email")} />
      <p>{errors.email?.message}</p>
      <br />
      <FaPhoneAlt /><label>Digite seu telefone: </label>
      <InputMask {...register("telefone")} mask={"(99) 99999-9999"} />
      <p>{errors.telefone?.message}</p>
      <br />
      <LiaIdCard /><label>Digite seu CPF: </label>
      <InputMask {...register("cpf")} mask={"999.999.999-99"} />
      <p>{errors.cpf?.message}</p>
      <br />
      <FaMapMarkerAlt /><label>Digite seu CEP: </label>
      <InputMask {...register("cep")} mask={"99999-999"} />
      <p>{errors.cep?.message}</p>
      <br />
      <button>Enviar</button>
    </form>
  );
}