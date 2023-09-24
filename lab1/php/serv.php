<?php
if (isset($_GET['x']) && isset($_GET['y']) && isset($_GET['r'])) {
    $start_time = microtime(true);
    $x = floatval($_GET['x']);
    $y = floatval($_GET['y']);
    $r = floatval($_GET['r']);
    $result = "Failure";
    if (isPointInside($x, $y, $r)) {
        $result = "Success";
    }
    $time = number_format(microtime(true) - $start_time, 4);
    echo json_encode(array($x, $y, $r, $result, $time));
}
function isPointInside($x, $y, $r)
{
    $ret = false;
    if ($x >= 0 && $y >= 0 && $y <= (-2) * $x + $r) {
        $ret = true;
    }
    if ($x <= 0 && $y >= 0 && $x ^ 2 + $y ^ 2 <= ($r / 2) ^ 2) {
        $ret = true;
    }
    if ($x <= 0 && $y <= 0 && $x >= -$r && $y >= (-$r / 2)) {
        $ret = true;
    }
    return $ret;
}
?>