import React, { useEffect, useState } from "react";
import "./styles.scss";
import IconPerson from "../../../assets/svg/IconPerson";
import Title from "../../shared/title";
import CustomInput from "../../shared/input";
import CustomCheckbox from "../../shared/checkbox";
import CustomButton from "../../shared/button";
import CustomTable from "../../shared/table";
import ErrorMessage from "../../shared/errorMessage";
import { deleteData, getData, postData } from "../../../api";

const Admins = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [password, setPassowrd] = useState("");
  const [confirmPassword, setConfirmPassowrd] = useState("");
  const [dataTable, setDataTable] = useState([]);
  const [error, setError] = useState(null);
  const headers = ["Nome", "Email", "Permissão"];

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const json = await getData("admins");
        const newDataTable = json.map((admin) => ({
          id: admin.adminId,
          columns: [admin.name, admin.email, admin.role],
        }));
        setDataTable(newDataTable);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchAdmins();
  }, []);

  const handleAddAdmin = () => {
    if (
      role.length > 0 &&
      email.length > 0 &&
      password.length > 0 &&
      confirmPassword.length > 0
    ) {
      if (password === confirmPassword) {
        const adminData = {
          name,
          email,
          password,
          role,
        };

        try {
          postData("admins", adminData).then(async () => {
            const json = await getData("admins");
            const newDataTable = json.map((admin) => ({
              id: admin.adminId,
              columns: [admin.name, admin.email, admin.role],
            }));
            setDataTable(newDataTable);
          });
          setRole("");
          setName("");
          setEmail("");
          setPassowrd("");
          setConfirmPassowrd("");
          setError(null);
        } catch (error) {
          setError("Houve um erro ao adicionar ADMIN");
        }
      } else {
        setError("Error: Senhas não conferem");
      }
    } else {
      setError("Error: Preencha todos os campos");
    }
  };

  const handleRemoveAdmin = (event) => {
    event.preventDefault();
    const id = event.target.id;
    try {
      deleteData("admins", id).then(async () => {
        const json = await getData("admins");
        const newDataTable = json.map((admin) => ({
          id: admin.adminId,
          columns: [admin.name, admin.email, admin.role],
        }));
        setDataTable(newDataTable);
      });
    } catch (error) {
      alert("Ocorreu um erro ao excluir Produto.");
    }
  };

  return (
    <div className="content-container">
      <div className="content-title">
        <IconPerson width="30px" />
        <Title text="Administradores" size="small" />
      </div>
      <div>
        <CustomInput
          label="Nome de Usuario"
          type="text"
          value={name}
          setValue={setName}
          placeholder="Digite o nome de usuário"
        />
        <CustomInput
          label="Email"
          type="email"
          value={email}
          setValue={setEmail}
          placeholder="Digite o email"
        />
        <CustomInput
          label="Senha"
          type={isVisible ? "text" : "password"}
          value={password}
          setValue={setPassowrd}
          placeholder="Digite a senha"
        />
        <CustomInput
          label="Confirmar Senha"
          type={isVisible ? "text" : "password"}
          value={confirmPassword}
          setValue={setConfirmPassowrd}
          placeholder="Digite a senha"
        />
        <div className="content-checkbox">
          <CustomCheckbox
            label="Exibir senha"
            value={isVisible}
            setValue={setIsVisible}
          />
        </div>
        <div className="content-checkbox">
          <div>
            <label className="label">Permissão:</label>
          </div>
          <div>
            <input
              type="radio"
              id="editor"
              name="role"
              value="editor"
              checked={role === "editor"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="editor" className="label">
              editor
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="root"
              name="role"
              value="root"
              checked={role === "root"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="root" className="label">
              root
            </label>
          </div>
        </div>
      </div>

      {error ? (
        <div>
          <ErrorMessage message={error} />
        </div>
      ) : null}

      <div>
        <CustomButton
          text="Cadastrar Administrador"
          buttonType="main-button"
          onClick={handleAddAdmin}
        />
      </div>

      <CustomTable
        headers={headers}
        data={dataTable}
        canRemove={true}
        handleRemove={handleRemoveAdmin}
      />
    </div>
  );
};

export default Admins;
