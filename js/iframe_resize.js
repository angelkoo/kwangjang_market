// iframe resize
// iframe ������ ����Ʈ ���̰� �������� �޶����� ���
// ������ ����Ʈ�� ������ ��ũ�� ���� ��� ��µ� �� �ֵ��� �� �ִ°�
  function autoResize(i)
  {
    var iframeHeight=
    (i).contentWindow.document.body.scrollHeight;
    (i).height=iframeHeight+20;
  }
