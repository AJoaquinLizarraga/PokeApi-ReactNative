/** @format */

import React, { useState } from "react"
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
  TouchableOpacity,
} from "react-native"
import { user, userDetails } from "../../utils/userDB"
import { useFormik } from "formik"
import * as Yup from "yup"
import useAuth from "../../hooks/useAuth"

const LoginForm = () => {
  const [error, setError] = useState("")

  const { login } = useAuth()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValues) => {
      setError("")
      const { userName, password } = formValues
      if (userName !== user.userName || password !== user.password) {
        setError("Invalid Username or Password")
        alert("Invalid Username or Password")
      } else {
        login(userDetails)
      }
    },
  })

  return (
    <View style={styles.container}>
      <Text style={styles.login}>LogIn</Text>
      <TextInput
        placeholder="Username"
        autoCapitalize="none"
        style={styles.input}
        value={formik.values.userName}
        onChangeText={(text) => {
          formik.setFieldValue("userName", text)
        }}
      />
      <TextInput
        placeholder="Password"
        autoCapitalize="none"
        secureTextEntry={true}
        style={styles.input}
        value={formik.values.password}
        onChangeText={(text) => {
          formik.setFieldValue("password", text)
        }}
      />
      <TouchableOpacity
        style={styles.btnGTAccount}
        onPress={() => {
          formik.handleSubmit()
          Keyboard.dismiss()
        }}
      >
        <Text>LogIn</Text>
      </TouchableOpacity>
      <Text style={styles.error}>{formik.errors.userName}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  )
}

const initialValues = () => {
  return {
    userName: "",
    password: "",
  }
}
const validationSchema = () => {
  return {
    userName: Yup.string().required("User Required"),
    password: Yup.string().min(6).required("Password Required"),
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    width: "90%",
  },
  login: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 15,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    // width: "90%",
  },
  error: {
    marginTop: 10,
    textAlign: "center",
    color: "red",
  },
  btnGTAccount: {
    marginTop: 20,
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    height: 40,
    // maxWidth: "80%",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
})
export default LoginForm
