@Resolver('auth')
export class AuthenticationResolver {
    constructor(private authService: AuthService) {}

    @Query(() => [UserDto])
    async login(): Promise<UserDto> {
        return this.authService.login();
    }
}
