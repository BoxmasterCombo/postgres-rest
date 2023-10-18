export const UserInvitationTemplate = `
<div style="width: 100%;max-width: 800px;margin: 0 auto;box-sizing: border-box;padding: 0">
  <header style="width: 100%;height: 26px;background: #1B3380;">
    <h1 style="margin:0;text-align: center;font-family: 'Fira Sans',sans-serif;font-style: normal;font-weight: 400;font-size: 16px;line-height: 26px;color: #FFFFFF;">
        You’ve been invited.
    </h1>
  </header>
  <div style="margin:0 auto;padding: 0;width: 100%;height: 32px; text-align: center">
    <a href="{{acceptUrl}}" style="cursor:pointer;text-decoration:none;display:inline-block;text-align:center;width: 74px;padding: 8px 0;background: #1B87E6;border-radius: 2px;outline: none;border: none;font-family: 'Fira Sans',sans-serif;font-style: normal;font-weight: 400;font-size: 14px;line-height: 16px;color: #FFFFFF;">
      Accept
    </a>
    <a href="{{rejectUrl}}" style="margin-left:12px;text-decoration:none;cursor:pointer;display:inline-block;background:transparent;border:none;outline:none;font-family: 'Fira Sans',sans-serif;font-style: normal;font-weight: 400;font-size: 14px;line-height: 16px;color: #1B87E6;">
      No thanks
    </a>
  </div>
  <p style="text-align:center;display:block;width: 100%;height: 34px; margin: 8px auto 0;font-family: 'Fira Sans',sans-serif;font-style: normal;font-weight: 600;font-size: 10px">
    1600 Pennsylvania Avenue NW, Washington, DC 20500, 
    <br/>
    If you no longer want to receive ANY emails from PostgresRest, <a href="">unsubscribe from this list.</a>
  </p>
</div>
`;
