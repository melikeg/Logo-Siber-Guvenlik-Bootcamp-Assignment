[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=6921259&assignment_repo_type=AssignmentRepo)
# week1-assignment

- XMLHttpRequest araştırılacak ve jsonplaceholder kullanılarak içerisindeki userlar console’a yazdırılacak.

### XMLHttpRequest Nedir?

XMLHttpRequest uzaktaki sunucuyla iletişim kurmak için kullanılır. Sayfa yenilemesi olmadan veri alımı ya da veri göderimi yapmamızı sağlar. Sayfa yenilenmesi olmadığı için işlemler hızlı yapılır ve sunucu yorulması engellenir.

### readyState

XMLHttpRequest.readyState özelliği, bir XMLHttpRequest istemcisinin bulunduğu durumu döndürür. Bir XHR istemcisi aşağıdaki durumlardan birinde bulunur:

   <table>
  <tr>
    <th>Değer</th>
    <th>Durum</th>
    <th>Açıklama</th>
  </tr>
  <tr>
    <td>0</td>
    <td>UNSENT</td>
    <td>Client has been created. open() not called yet.</td>
  </tr>
  <tr>
    <td>1</td>
    <td>OPENED</td>
    <td>open() has been called</td>
  </tr>
  <tr>
    <td>2</td>
    <td>FHEADERS_RECEIVED</td>
    <td>send() has been called, and headers and status are available.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>LOADING</td>
    <td>Downloading; responseText holds partial data.</td>
  </tr>
  <tr>
    <td>4</td>
    <td>DONE</td>
    <td>The operation is complete.</td>
  </tr>
</table>
