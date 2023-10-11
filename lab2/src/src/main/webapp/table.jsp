<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<c:forEach items="${Points}" var="point">
    <tr>
        <td>${point.split(' ')[0]}</td>
        <td>${point.split(' ')[1]}</td>
        <td>${point.split(' ')[2]}</td>
        <td>${point.split(' ')[3]}</td>
        <td>${point.split(' ')[4]}</td>
        <td>${point.split(' ')[5]} ${point.split(' ')[6]} ${point.split(' ')[7]} ${point.split(' ')[8]} ${point.split(' ')[9]} ${point.split(' ')[10]}</td>
    </tr>
</c:forEach>