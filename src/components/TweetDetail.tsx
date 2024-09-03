

const TweetDetail = () => {
  return (
    <div className="  text-white p-4 rounded-lg">
      <div className="flex items-center mb-4">
        <img
          className="w-8 rounded-full"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEXMAAD////JAAD99/f45OTVUFDxy8vmoaHikpLtv7/++vrfgID02trXWVnZZGT019fcdnbghob45ub67e3SOjrTQUHqsrLvxcXpra3USkr66+v88/PWVFTdeXnuv7/ZZmbhjY3NDw/TRETXXV3YZGTkmprprq7QKyvRNTXPIiLnpqbOGxvbbm7NFRXhiorGDO94AAAJYElEQVR4nO2cW0PqOhCFy4CCiAgIKHJRwBvI9v//vNOES2Ymk7RI6nmZ9bSBmOZrbmum6c4ylUqlUqlUKpVKpVKpVCqVSqVSqVQqlUqlUqlUKpVKpVKpVCqVSqVSqVQqlUqlUqlUKpVKpVKp/kwgyCuSrbpvk8z7IVTjcvLWHfn1iFf1P6VUXmO3Nb5uPEzbSLV7ciGYjB9qVtPFXWETAF5u6vvig+0wVBzea8eLXeWfTpfvJEWErLc4NJ0JE8KsgX96fom3AeZTUtNILg7NUxFDWD9+aKQjBOhdi3SMEBb8x+tYtf86vPiT2ObKCSHbtoN8mBCe/V/rX8FqV0Jljf+BELJxBI8QTsXfPwMVS4D5wBZaXS0hqr2AEAby73W54n+FN+xPCGEm94vQJHgKFbiWGgLeHDyq5RWvkBAKBigm/AqXWAs134aLL/+MEDbCyhEihPBiW3sQBl5kbDx6HqIiQrgLtGA6aGAt7HXItHpaD2fvdffZH3g7VLr+Phuu8Rif/A0hzH229mPrbim6Nnh1pRqZ+Qrw5uhV/uh+u7E1QOa8woC1vBpC+PHwPiZhK4gG6WlMou8WvM2ug0/rEDjLdEuLV0IIfcbX6EWNLppXs8yaY/Ot+/MRLb6k3bsvPnFfVk8IPcr3cDSYeVs+Z7seVtd+T7oQbmr35svW6VtmkmenH8yyAve2k9HQpe6tCkJ0O40OK0Xuvsf+tt6h3ZU32Q4A23TXsz3Smu7p+3fY70nmEktXKTFCFRCiS+UabPaLyZu8IdxTwhs4tGhCSOoBwpxsP18zGyXRSisjBBICjfd8czl2ChMO9uPvqCZujkC4oH3erZKQWtFXu5ZPwpt/iNCuiJ+u3Hec0C5GbpucgtigNIRD3H47f+AjyBchbAP5S2xPJULTXuRWkUtITUhihLmp5Dvq3oKEdkV0i6zdRiKE9maiu4talJaQ7ITmRsIoxhcjNCsistgo9BMJbZ87r+9cQmpCFM/fmGuyneMcQvMTGhI/pxaJhLUt4Ipqq2oI0Yq9919kVkrqhAntinjlip6uIhOaxQgZ3BNAYkLUhUP2ea/7j1Yfa5eFCafUqoyPTQoQmsUI2dP50UilJMSz0AwaujXmk+MukBCWCe1ERoHVMS0VILSLkQva2pUQDkj9LEszzoJ1BghrtIFHqxIiNIsR+riF9IQoAdYHlpp4CCalI4TWqrhYaRcntIvRxn3cJCdE6aQ6NV2BhFIhoWxVgoS2z7fsmkkJnTHMTX+G8xhe9qQkIbMq7xAnNIsRWt3uUhNSS4G7UEhjliPkVmUZJzSLEUqg2A0rISEKWa/pLGwXVRYmrFOrYsdChPCeruCvkJbQXeuW5niFlGdZwn3c5D7SuNEjrL1kJALP0hLWScVuUhaN0SghsyombowRTvdpkKPGkJJwSZqBJg/PYJ5HyKxKHjfGCO1i5FqSO6uEhG7tzLcxNCl5AvNMQmtV1u5jASFLaHQgHSGybPkERyPl/UJCZlWeIE54QxMau4SErqYuMXCr4r+NElp/hK1KnNBez7mEekJCt6YPSXReoqY4IbcqLqISCRvUT727+XIpoRuXS9xo6bnsmYTMqrhZJhLauAntxu7eXEroLkWCnuK9opCQWRUnmZAlNJySEn4nJWRWpYCQJzSqIUzbh9yqFBCauMl//JVyHpJbWGI7DBG6fzGrIhPSuAn8NHu6tfQr0Vo6QisizZ6KhCxu8p9CV7Ufjor/NkA4QytiRjN5IqHLrj5Ql5CI0HmaH8A5Mv85fFnCOzQumFURCdFtfaUuIQkh8o5j4ktLVBUi5ClefERBIORx05YVTxtboKxU8TANErIUL0n9CIQsu8rTtYnjQ+E4wfmEPMXLThZxwmzpfhNcQsIYf05NxazoT8OELMXLrIpHSOImzyVcTOhqN72GHjrViyqLEPIUb5yQZ1fpEcaLc22IKSNJwMJxGiFkKV5qVXxCEjdl7FRuynxpi6RT/EM/ZxCyFC85aCsQAnUJpM8vJ3STZEozuUUp4RghT/HOUK0CIV6MliTFmeK5BdqOboE9PBx8nv/c4kBIU7zYqkiELLuKXUKCZ09uBNlJQHfcbfDkl5tqEiFP8brATCTk2dWXpIRoGTCZXH60+WMlvslBvZlPiFfEjNw4kRC1grmEFM+AEY55nukdx65fN/vzHtWcHKaUCNGKSK2K3IdoKN0Sl5CCEEWvNj9TdFCBSybEA89kuU4nA2VCtBjRUzlJzmKg1trbHToqfB4hO6d4mpgBQpJdRY1KQohO+9o8J6DDFL8nJCnezHmLACFejD5RXJfmTBTekHcG8bP4lYRiQnZO8TgxQ4SoDuwS0pxrI07QHp3132f6BaFsVUKE2J6aR3uzlIT03RB75hrWpbsxSIjPKTqrEiZ0x5SRS0h1vpRsgvsTyfBTr5VSmBDdOWdVgoTYMjqXkOqMMJrmuTpL243QY+G5rNwnIBQSV6Jl+vQgOEzIDxU0D/UlIeQ7RP/gF+H2MXRS+KiHjMw48tQKZdJOB4h3pDhpsuQSvvF9uuisPnstaTA7MkI2epnfBmUP3NIJh6t1w99M7+8Gz8WwJrt6zBG7q6k9UORqv+gtWRKy2NrekB2V3ndG78+g0cza4AxSGw43LAMX8bKHXPxthn1x52kLQtYiRC93O20OS70+jbcWfpdRJu3UPLQt8BAUJbH6R1OOZmeJNG60ofytGQO56K8iHWi1xgvxlrdh6X4b7993+ofK93nxNf7NFsc2eXgRYF4ZCsuw2oNORDS/6Z3hwENj2roadknmzW8DipUb/dVoh4KYUg9uCxC/znFrkoQ2QGRbFeaVl9ZH+rmY8Dy3Jmku1MnT+kgboQU8re9UmOAsh/gSe0+9SOJ+xdP6Tk2xeLDPu0LpXzEGX2AultAnRoGbFti/QxH4R5IutIib3w7V0H+LIZ/+n4au3xOLFz9JOYuxzCvdnq5CbYCh0IuD8OWlmVtwnvd8RuiXct34HnvvnGN5tY0jLYahZ4ZfEwOaq8Cy/1gyfjJ8s3gTYEca3ZkUFG+RXn/cpAe0lwHY9JqL++c46LQznodfWnC1rReH3fb5Y1VYHGB+fYBsNCviO12qhMpWlU3euqvy/xfR9+xlXc4aq1QqlUqlUqlUKpVKpVKpVCqVSqVSqVQqlUqlUqlUKpVKpVKpVCqVSqVSqVQqlUqlUqlUKpVK9Sv9B/QfhFk0xuKgAAAAAElFTkSuQmCC" 
          alt="CNN logo"
          
        />
        <div className="ml-3">
          <span className="font-bold">CNN</span>
          <span className="text-gray-500 ml-2">@CNN · 7m</span>
        </div>
      </div>
      <div className="mb-4">
        <p>
          President Joe Biden touted a new agreement reached with the European
          Union to ease Trump-era tariffs on aluminum and steel as a "major
          breakthrough" that would serve to both strengthen the US steel
          industry and combat the global climate crisis.
        </p>
      </div>
      <div className="flex justify-between text-gray-500">
        <div className="flex items-center space-x-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8h2a2 2 0 012 2v7a2 2 0 01-2 2h-6l-4 4v-4H5a2 2 0 01-2-2v-7a2 2 0 012-2h2"
            ></path>
          </svg>
          <span>57</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8h2a2 2 0 012 2v7a2 2 0 01-2 2h-6l-4 4v-4H5a2 2 0 01-2-2v-7a2 2 0 012-2h2"
            ></path>
          </svg>
          <span>144</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8h2a2 2 0 012 2v7a2 2 0 01-2 2h-6l-4 4v-4H5a2 2 0 01-2-2v-7a2 2 0 012-2h2"
            ></path>
          </svg>
          <span>184</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8h2a2 2 0 012 2v7a2 2 0 01-2 2h-6l-4 4v-4H5a2 2 0 01-2-2v-7a2 2 0 012-2h2"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TweetDetail;
