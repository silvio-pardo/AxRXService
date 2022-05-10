# AxRxService
Typescript class Wrap around Axios and rxjs

## Installation
```sh
npm i axrxservice
```

## Usage

```javascript
import { AxRxService } from "./AxRxService";

const httpClient = AxRxService({} as AxiosRequestConfig);

httpClient.get<type>({} as IAxRxParams); //default usage
httpClient.get<type>({} as IAxRxParams, {} as AxiosRequestConfig); //merge special axios config usage
```
