export const UserForgetTemplate = `
    <div style="width: 100%;max-width: 400px;margin: 0 auto;box-sizing: border-box;padding: 0">
    <div style="width: 100%;margin: 0 auto">
        <p style="color: #545E6B;font-family: Fira Sans sans-serif;font-size: 10px;font-style: normal;font-weight: 400;line-height: 150%;">{{name}}</p>
        <p style="color: #545E6B;font-family: Fira Sans sans-serif;font-size: 10px;font-style: normal;font-weight: 400;line-height: 150%;">
            We've received a request to change the password for your PostgresRest account: <span
                style="color: #1B87E6;font-family: Fira Sans sans-serif;font-size: 10px;font-style: normal;font-weight: 400;line-height: 150%;">{{email}}</span>
            <br>
        </p>
        <p style="color: #545E6B;font-family: Fira Sans sans-serif;font-size: 10px;font-style: normal;font-weight: 400;line-height: 150%;">
            If you would like to reset your password click the link below.
            <a href="{{forgetUrl}}"
               style="color: #1B87E6;font-family: Fira Sans sans-serif;font-size: 10px;font-style: normal;font-weight: 400;line-height: 150%;text-decoration-line: underline;">
               {{forgetUrl}}
            </a>
        </p>
        <p style="color: #545E6B;font-family: Fira Sans sans-serif;font-size: 10px;font-style: normal;font-weight: 400;line-height: 150%;">
            If you didn't request this, please ignore this email.</p>
    </div>
    <p style="color: #707070;text-align: center;font-family: Fira Sans sans-serif;font-size: 8px;font-style: normal;font-weight: 400;line-height: normal;">
        You are receiving this email from PostgresRest because you purchased a product/service or <br> subscribed on our
        website. If you'd prefer not to receive updates, you can <a href=""
                                                                    style="color: #707070;font-family: Fira Sans sans-serif;font-size: 8px;font-style: normal;font-weight: 400;line-height: normal;text-decoration-line: underline;">unsubscribe.</a>
    </p>
    <p style="color: #707070;text-align: center;font-family: Fira Sans sans-serif;font-size: 8px;font-style: normal;font-weight: 400;line-height: normal;">
       1600 Pennsylvania Avenue NW, Washington, DC 20500, 
</div>
`;
