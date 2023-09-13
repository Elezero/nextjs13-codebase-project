// const BASE_URL = ''
// const HEADER = ''
import { UsersService } from '@/src/api/backendService/endpoints/users'
import { PostsService } from '@/src/api/backendService/endpoints/posts'

const MainBackendService = {
	// private baseUrl: string
	// private authToken: string | undefined

	// constructor(baseUrl: string, authToken?: string) {
	// 	this.baseUrl = baseUrl
	// 	this.authToken = authToken
	// }

	users: UsersService,
	posts: PostsService,
}

export default MainBackendService

// class MasterFunction {
//   private baseUrl: string;
//   private authToken: string | undefined;

//   constructor(baseUrl: string, authToken?: string) {
//     this.baseUrl = baseUrl;
//     this.authToken = authToken;
//   }

//   private async fetchWithHeaders(
//     url: string,
//     method: HttpMethod,
//     bodyParams?: object
//   ) {
//     const headers: Record<string, string> = {
//       'Content-Type': 'application/json',
//     };

//     if (this.authToken) {
//       headers['Authorization'] = `Bearer ${this.authToken}`;
//     }

//     const requestOptions: RequestInit = {
//       method,
//       headers,
//     };

//     if (method === 'POST' && bodyParams) {
//       requestOptions.body = JSON.stringify(bodyParams);
//     }

//     const response = await fetch(`${this.baseUrl}${url}`, requestOptions);

//     if (!response.ok) {
//       throw new Error(`Request failed with status ${response.status}`);
//     }

//     return response.json();
//   }

//   async GET(url: string, queryParams?: object) {
//     // Construct the query string
//     if (queryParams) {
//       const queryString = new URLSearchParams(queryParams).toString();
//       url += `?${queryString}`;
//     }

//     return this.fetchWithHeaders(url, 'GET');
//   }

//   async POST(url: string, bodyParams: object) {
//     return this.fetchWithHeaders(url, 'POST', bodyParams);
//   }
// }
