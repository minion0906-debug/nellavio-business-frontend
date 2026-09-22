import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import { SignUpData } from "@/components/auth/SignUpForm";

/**
 * Sign-up form management (UI-only, no backend).
 * Handles validation (Yup), error display, and form state.
 */
export const useHandleSignUp = (_onSignUpSuccess?: () => void) => {
  const t = useTranslations("auth");
  const [loading] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showConfirmPasswordError, setShowConfirmPasswordError] =
    useState(false);
  const [signUpError] = useState("");

  const validationSchema = useMemo(
    () =>
      Yup.object().shape({
        email: Yup.string()
          .required(t("emailFieldIsRequired"))
          .email(t("pleaseEnterAValidEmail")),
        password: Yup.string()
          .required(t("passwordFieldIsRequired"))
          .min(10, t("passwordMinimumLength")),
        confirmPassword: Yup.string()
          .required(t("confirmPasswordRequired"))
          .oneOf([Yup.ref("password")], t("passwordsMustMatch")),
      }),
    [t],
  );

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest(".ignore-error-hide")) return;
      setShowEmailError(false);
      setShowPasswordError(false);
      setShowConfirmPasswordError(false);
    };

    document.addEventListener("mousedown", handleDocumentClick);
    return () => document.removeEventListener("mousedown", handleDocumentClick);
  }, []);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: yupResolver(validationSchema),
    mode: "onSubmit",
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  useEffect(() => {
    if (errors.email) setShowEmailError(true);
  }, [errors.email]);

  useEffect(() => {
    if (errors.password) setShowPasswordError(true);
  }, [errors.password]);

  useEffect(() => {
    if (errors.confirmPassword) setShowConfirmPasswordError(true);
  }, [errors.confirmPassword]);

  const onSubmit = useCallback(async (_data: SignUpData) => {
    /** UI-only: no backend call */
  }, []);

  return {
    loading,
    showEmailError,
    setShowEmailError,
    showPasswordError,
    setShowPasswordError,
    showConfirmPasswordError,
    setShowConfirmPasswordError,
    signUpError,
    handleSubmit,
    onSubmit,
    control,
    errors,
  };
};
