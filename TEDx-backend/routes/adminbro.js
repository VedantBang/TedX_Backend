const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const bcrypt = require("bcrypt");
// Adminbro Plugin for Mongoose
AdminBro.registerAdapter(require("admin-bro-mongoose"));

//models
const Admin = require("../models/admin");
const Album = require("../models/album");
const Blog = require("../models/blog");
const Organizer = require("../models/organizer");
const Speaker = require("../models/speaker");

//options
const adminResourceOptions = require("../options/adminOptions");
const albumResourceOptions = require("../options/albumOptions");
const blogResourceOptions = require("../options/blogOptions");
const organizerResourceOptions = require("../options/organizerOptions");
const speakerResourceOptions = require("../options/speakerOptions");

const adminBro = new AdminBro({
  resources: [
    { resource: Admin, options: adminResourceOptions },
    { resource: Album, options: albumResourceOptions },
    { resource: Blog, options: blogResourceOptions },
    { resource: Organizer, options: organizerResourceOptions },
    { resource: Speaker, options: speakerResourceOptions },
  ],
  rootPath: "/admin",
  loginPath: "/admin/login",
  logoutPath: "/admin/logout",
  branding: {
    companyName: "TEDx Admin Panel",
    logo: "https://i.ibb.co/gj6GqHt/logo-black.png",
    softwareBrothers: false
  },
  dashboard: {
    handler: async () => {},
    component: AdminBro.bundle("../components/dashboard.jsx"),
  },
});

// auth function for admin login
const authOptions = {
  authenticate: async (email, password) => {
    try {
      let admin = await Admin.findOne({ email });
      if (admin) {
        const matched = await bcrypt.compare(password, admin.passhash);
        if (matched) return admin;
      }
      return false;
    } catch (err) {
      console.log("\x1b[31mERROR\x1b[0m", err);
      return false;
    }
  },
  cookieName: "session", // name of cookie
  cookiePassword: "its a secret", // encryption key for cookie
};

module.exports = AdminBroExpress.buildAuthenticatedRouter(
  adminBro,
  authOptions
);
