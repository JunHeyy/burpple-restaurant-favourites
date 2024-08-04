const initInterceptors = (axiosInstance) => {
    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response.status === 401) {
                window.location.href = "/error/unauthorised";
            } else if (error.response.status === 404) {
                window.location.href = "/error";
            }
            return Promise.reject(error);
        }
    );
};

export { initInterceptors };
