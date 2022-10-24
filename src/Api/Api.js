import axios from 'axios';

const api = 'http://192.168.237.18:8080';

const getRequest = async(path, params = {}) => {
    try {
        const token = sessionStorage.getItem('user_token');
        const response = await axios.get(api + path, {
            headers: {
                authorization: `Bearer ${token}`,
                Accept: '*/*'
            },
            params
        });
        return response;
    } catch (e) {
        console.log(e);
        return [];
    }
};

const postFormReqest = async(path, body) => {
    try {
        const token = sessionStorage.getItem('user_token');
        const { data } = await axios.post(api + path, body, {
            headers: {
                authorization: `Bearer ${token}`,
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        });
        return data;
    } catch (e) {
        console.log(e);
    }
};

const postJsonReqest = async(path, body) => {
    try {
        const token = sessionStorage.getItem('user_token');
        if (token) {
            const { data } = await axios.post(api + path, body, {
                headers: {
                    authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            return data;
        } else {
            const { data } = await axios.post(api + path, body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return data;
        }
    } catch (e) {
        console.log(e);
    }
};

const putJsonReqest = async(path, body) => {
    try {
        const token = sessionStorage.getItem('token');
        if (token) {
            const { data } = await axios.put(api + path, body, {
                headers: {
                    authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            return data;
        } else {
            const { data } = await axios.put(api + path, body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return data;
        }
    } catch (e) {
        console.log(e);
    }
};

const deleteJsonReqest = async(path) => {
    try {
        const token = sessionStorage.getItem('user_token');
        if (token) {
            const { data } = await axios.delete(api + path, {
                headers: {
                    authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            return data;
        } else {
            const { data } = await axios.delete(api + path, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return data;
        }
    } catch (e) {
        console.log(e);
    }
};

const Api = {
    // 이메일 인증코드 저장
    emailCode: null,
    // 한 페이지당 보여줄 컨텐츠 개수
    pageCount: 6,

    //Auth---------------------------------------------------------------------------
    // 로그인
    postLogin: async(login_id, password) => {
        return await postJsonReqest('/user/login', {
            login_id,
            password
        });
    },
    // 로그아웃
    getLogout: async() => {
        return await getRequest('/auth/logout');
    },

    // User--------------------------------------------------------------------------
    // 회원가입
    postUser: async(user_data) => {
        return await postJsonReqest('/user', user_data);
    },
    // 회원정보 조회
    getReaduser: async(userId) => {
        return await getRequest(`/user/${userId}`);
    },

    // Movie--------------------------------------------------------------------------
    // 영화 목록 조회
    getMovieListRead: async() => {
        return await getRequest('/movie/all');
    },
    // 예매율순 영화 목록 조회
    getMovieListForTicketRating: async() => {
        return await getRequest('/movie/ticket');
    },
    // 평점순 영화 목록 조회
    getMovieListForReviewRating: async() => {
        return await getRequest('/movie/review');
    },
    // 영화 검색
    postSearchMovie: async(keyword) => {
        return await getRequest(`/movie/${keyword}/search`);
    },
    // 영화 상세 조회
    getMovieDetailRead: async(movie_id) => {
        return await getRequest(`/movie/${movie_id}/detail`);
    },

    // Seat--------------------------------------------------------------------------
    // 잔여 좌석 조회
    getSeatsAval: async(screen_id) => {
        return await getRequest(`/seat/${screen_id}/aval`);
    },
    // 상영관별 잔여 좌석 조회
    getScreenSeatsAval: async(screen_id) => {
        return await getRequest(`/seat/screen/${screen_id}/seats`);
    },
    // 예매하기
    postReserve: async(reserveObj) => {
        return await postJsonReqest('/reserve/create', reserveObj);
    },
    // 상영관 할인 정책 
    postSaleSet: async(screen_id, feeObj) => {
        return await postJsonReqest(`/screen/${screen_id}/discount/policy`, feeObj);
    },

    // mypage--------------------------------------------------------------------------
    // 유저 상세정보 조회
    getMyDataRead: async(user_id) => {
        return await getRequest(`/user/${user_id}/detail`);
    },
    // 예매내역 조회
    getTicketRead: async(user_id) => {
        return await getRequest(`/reserve/${user_id}/reservation`);
    },
}

export default Api;