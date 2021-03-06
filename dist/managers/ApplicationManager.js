"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const GlobalContext_1 = require("../common/GlobalContext");
class ApplicationManager {
    static startApplication(appConfig) {
        let app = GlobalContext_1.GlobalContext.getInstance.application;
        this.server = this.startServer(appConfig.port, app);
        console.log(`Server listening on  ${appConfig.port}`);
        return this.server;
    }
    static startServer(port, app) {
        let server = app.listen(port, (error) => {
            if (error) {
                throw error;
            }
        });
        return server;
    }
    static stopServer() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (this.server && this.server.address()) {
                    this.server.close((error) => {
                        if (error) {
                            reject(error);
                        }
                        resolve(true);
                    });
                }
                else {
                    resolve(false);
                }
            });
        });
    }
}
exports.ApplicationManager = ApplicationManager;
