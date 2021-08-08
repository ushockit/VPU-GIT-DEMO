@Resolver('auth')
export class AuthenticationResolver {
    constructor(private readonly authenticationService: AuthService) {

    }
}
