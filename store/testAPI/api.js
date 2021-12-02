import axios from "axios"
const testAPI = axios.create({
  baseURL: "https://test110-dev-23179-prod.herokuapp.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_customtext_list(payload) {
  return testAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_create(payload) {
  return testAPI.post(`/api/v1/customtext/`, payload.data)
}
function api_v1_customtext_read(payload) {
  return testAPI.get(`/api/v1/customtext/${payload.id}/`)
}
function api_v1_customtext_update(payload) {
  return testAPI.put(`/api/v1/customtext/${payload.id}/`, payload.data)
}
function api_v1_customtext_partial_update(payload) {
  return testAPI.patch(`/api/v1/customtext/${payload.id}/`, payload.data)
}
function api_v1_customtext_delete(payload) {
  return testAPI.delete(`/api/v1/customtext/${payload.id}/`)
}
function api_v1_demo_list(payload) {
  return testAPI.get(`/api/v1/demo/`)
}
function api_v1_demo_create(payload) {
  return testAPI.post(`/api/v1/demo/`, payload.data)
}
function api_v1_demo_read(payload) {
  return testAPI.get(`/api/v1/demo/${payload.id}/`)
}
function api_v1_demo_update(payload) {
  return testAPI.put(`/api/v1/demo/${payload.id}/`, payload.data)
}
function api_v1_demo_partial_update(payload) {
  return testAPI.patch(`/api/v1/demo/${payload.id}/`, payload.data)
}
function api_v1_demo_delete(payload) {
  return testAPI.delete(`/api/v1/demo/${payload.id}/`)
}
function api_v1_homepage_list(payload) {
  return testAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_create(payload) {
  return testAPI.post(`/api/v1/homepage/`, payload.data)
}
function api_v1_homepage_read(payload) {
  return testAPI.get(`/api/v1/homepage/${payload.id}/`)
}
function api_v1_homepage_update(payload) {
  return testAPI.put(`/api/v1/homepage/${payload.id}/`, payload.data)
}
function api_v1_homepage_partial_update(payload) {
  return testAPI.patch(`/api/v1/homepage/${payload.id}/`, payload.data)
}
function api_v1_homepage_delete(payload) {
  return testAPI.delete(`/api/v1/homepage/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return testAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(payload) {
  return testAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_test_list(payload) {
  return testAPI.get(`/api/v1/test/`)
}
function api_v1_test_create(payload) {
  return testAPI.post(`/api/v1/test/`, payload.data)
}
function api_v1_test_read(payload) {
  return testAPI.get(`/api/v1/test/${payload.id}/`)
}
function api_v1_test_update(payload) {
  return testAPI.put(`/api/v1/test/${payload.id}/`, payload.data)
}
function api_v1_test_partial_update(payload) {
  return testAPI.patch(`/api/v1/test/${payload.id}/`, payload.data)
}
function api_v1_test_delete(payload) {
  return testAPI.delete(`/api/v1/test/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return testAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_list(payload) {
  return testAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return testAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return testAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return testAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return testAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return testAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return testAPI.post(`/rest-auth/registration/verify-email/`, payload.data)
}
function rest_auth_user_read(payload) {
  return testAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return testAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return testAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_v1_customtext_list,
  api_v1_customtext_create,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_customtext_delete,
  api_v1_demo_list,
  api_v1_demo_create,
  api_v1_demo_read,
  api_v1_demo_update,
  api_v1_demo_partial_update,
  api_v1_demo_delete,
  api_v1_homepage_list,
  api_v1_homepage_create,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_homepage_delete,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_test_list,
  api_v1_test_create,
  api_v1_test_read,
  api_v1_test_update,
  api_v1_test_partial_update,
  api_v1_test_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
