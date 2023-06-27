const Navigate = (navigate) => {
  const loggedInUser = localStorage.getItem("authenticated");
  const loggedUserRole = localStorage.getItem("user-role");

  if (loggedInUser === "true") {
    if (loggedUserRole === "staff") {
      localStorage.setItem("username", "kajamohan Staff");
      navigate("/sda-uoj-system/academic-staff");
    }

    if (loggedUserRole === "student") {
      localStorage.setItem("username", "kajamohan Student");
      // navigate("/sda-uoj-system/student");
      navigate("/student");
    }

    if (loggedUserRole === "admin") {
      localStorage.setItem("username", "kajamohan Admin");

      navigate("/sda-uoj-system/non-academic-staff");
    }
  } else {
    navigate("/sda-uoj-system");
  }
};

export default Navigate;
