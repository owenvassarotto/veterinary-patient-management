import { toast } from "react-toastify";
import { usePatientStore } from "../store"
import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import { BsTrash } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

type PatientDetailsProps = {
  patient: Patient,
}

export default function PatientDetails({ patient } : PatientDetailsProps) {

  const { deletePatient, getPatientById } = usePatientStore();

  const handleClick = () => {
    deletePatient(patient.id);

    toast("Paciente eliminado correctamente", {
      type: "error",
    });
  }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="Id" data={patient.id} />
      <PatientDetailItem label="Nombre" data={patient.name} />
      <PatientDetailItem label="Propietario" data={patient.caretaker} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Fecha alta" data={patient.date.toString()} />
      <PatientDetailItem label="Síntomas" data={patient.symptoms} />
      <div className="flex justify-between gap-3 mt-8">
        <button
          type="button"
          className="text-indigo-600 hover:text-indigo-700 text-3xl uppercase rounded-full"
          onClick={() => getPatientById(patient.id)}
        >
          <FaRegEdit className="font-black" />
        </button> 

        <button
          type="button"
          className="text-red-600 hover:text-red-700 text-3xl uppercase rounded-full"
          onClick={() => handleClick()}
        >
          <BsTrash className="font-black" />
        </button> 
      </div>
    </div>
  )
}
