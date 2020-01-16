import axios from "axios";

// Creates an instance of Axios client with some default props
export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization:
            "Client-ID a32a1c89754c97f67391ef2647da0eb5cf9f19da032944c4380038e57118a878"
    }
});
